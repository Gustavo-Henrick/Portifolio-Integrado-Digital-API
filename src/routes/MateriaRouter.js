import { Router } from "express";
import {
  criarMateria,
  listarMaterias,
  consultarMateria,
  atualizarMateria,
  excluirMateria,
} from "../controllers/MateriaController.js";

const router = Router();
router.post("/", criarMateria);
router.get("/", listarMaterias);
router.get("/:id", consultarMateria);
router.put("/:id", atualizarMateria);
router.delete("/:id", excluirMateria);

export default router;
