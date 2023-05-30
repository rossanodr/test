import axios from 'axios';

export const fetchSTFJurisprudencias = async (keywords: string) => {
  try {
    const response = await axios.get(`/api/${encodeURIComponent(keywords)}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao chamar API STF:', error);
    return [];
  }
};