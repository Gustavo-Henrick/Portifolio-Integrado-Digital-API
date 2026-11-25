import Materia from "./Materia.js";
import Bimestre from "./Bimestre.js";

Materia.hasMany(Bimestre, {
  foreignKey: {
    name: "materia_id",
    allowNull: false,
  },
  as: "bimestres",
  onUpdate: "CASCADE",
  onDelete: "RESTRICT",
});

Bimestre.belongsTo(Materia, {
  foreignKey: {
    name: "materia_id",
    allowNull: false,
  },
  as: "materia",
  onUpdate: "CASCADE",
  onDelete: "RESTRICT",
});

export { Materia, Bimestre };
