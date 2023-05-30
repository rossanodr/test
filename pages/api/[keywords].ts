import { scrapeSTFJurisprudencias } from "@/app/function";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { keywords },
  } = req;

  try {
    const jurisprudencias = await scrapeSTFJurisprudencias(String(keywords));
    console.log(jurisprudencias)
    res.status(200).json(jurisprudencias);
  } catch (error) {
    console.error("Erro na API STF:", error);
    res.status(500).json([]);
  }
};
