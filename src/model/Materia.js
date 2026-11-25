import { DataTypes } from "sequelize";
import { conn } from "../config/conn.js";

const Materia = conn.define(
  "materias",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(120),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 120],
      },
    },
    instituto: {
      type: DataTypes.ENUM("SESI", "SENAI"),
      allowNull: false,
    },
  },
  {
    tableName: "materias",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

export default Materia;
