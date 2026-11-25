import express from "express";
import BimestreRouter from "./routes/BimestreRouter.js";

const app = express();

app.use(express.json());
app.use("/bimestres", BimestreRouter);

export default app;