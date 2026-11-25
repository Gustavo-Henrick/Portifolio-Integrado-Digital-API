import { Router } from "express";
import { listarBimestres } from "./controllers/BimestreController.js";

const router = Router();

router.get("/", listarBimestres);

export default router;