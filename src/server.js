import { DataTypes } from "sequelize";
import app from "./app.js";
import conn from "./config/conn.js";

const port = Number(process.env.PORT || 3333);

try {
  await conn.authenticate();
  await conn.sync();

  const schema = conn.getQueryInterface();
  const bimestres = await schema.describeTable("bimestres");
  for (const [antigo, atual] of [["createdAt", "created_at"], ["updatedAt", "updated_at"]]) {
    if (bimestres[antigo] && !bimestres[atual]) {
      await schema.renameColumn("bimestres", antigo, atual);
    }
  }
  if (!bimestres.conteudo) {
    await schema.addColumn("bimestres", "conteudo", { type: DataTypes.TEXT, allowNull: true });
  }

  app.listen(port, () => console.log(`API do Portfólio Escolar na porta ${port}`));
} catch (error) {
  console.error("Falha ao iniciar a API:", error.message);
  await conn.close();
  process.exitCode = 1;
}
