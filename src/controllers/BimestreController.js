import { Bimestre } from "../model/index.js";

export const listarBimestres = async (request, response) => {
  try {
    const bimestres = await Bimestre.findAll();
    return response.status(200).json(bimestres);
  } catch (error) {
    return response.status(500).json({
      message: "Erro ao listar bimestres",
      error: error.message,
    });
  }
};