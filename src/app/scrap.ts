import axios, { AxiosInstance } from 'axios';
import cheerio from 'cheerio';

export const scrapeSTFJurisprudencias = async (
  keywords: string,
  axiosInstance: AxiosInstance = axios
) => {
  const searchUrl = `https://jurisprudencia.stf.jus.br/pages/search?base=acordaos&sinonimo=true&plural=true&page=1&pageSize=10&queryString=${encodeURIComponent(
    keywords
  )}&sort=_score&sortBy=desc`;

  try {
    // Fazer a requisição HTTP utilizando a instância axios fornecida
    const response = await axiosInstance.get(searchUrl);
    const html = response.data;

    // Carregar o HTML e extrair os dados
    const $ = cheerio.load(html);
    const jurisprudencias = $('li.clearfix').map((index, element) => {
      const title = $(element).find('.doc-title').text();
      const summary = $(element).find('.doc-ementa').text();
      const link = `https://jurisprudencia.stf.jus.br${$(element).find('.doc-link').attr('href')}`;

      return {
        title: title.trim(),
        summary: summary.trim(),
        link,
      };
    }).get();

    return jurisprudencias;
  } catch (error) {
    console.error('Erro ao fazer o web scraping das jurisprudências do STF:', error);
    return [];
  }
};