const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define(
    'Bimestre',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      numero_bimestre: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 4,
          isInt: true,
        },
      },
      
      ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 2020,
          max: 2026,
          isInt: true,
        },
      },
      materia_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      tableName: 'bimestres',
      timestamps: true,
      indexes: [
        {
          name: 'bimestre_unico_por_materia_ano',
          unique: true,
          fields: ['materia_id', 'ano', 'numero_bimestre'],
        },
      ],
    }
  );
};
