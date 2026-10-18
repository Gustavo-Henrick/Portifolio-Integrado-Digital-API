const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'Materia',
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
        },
      },
      instituto: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['SESI', 'SENAI']],
        },
      },
    },
    {
      tableName: 'materias',
      timestamps: true,
    }
  );
};
