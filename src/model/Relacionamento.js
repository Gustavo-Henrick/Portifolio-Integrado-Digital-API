const MateriaModel = require('./Materia');
const BimestreModel = require('./Bimestre');

module.exports = (sequelize) => {
  const Materia = MateriaModel(sequelize);
  const Bimestre = BimestreModel(sequelize);

  Materia.hasMany(Bimestre, {
    foreignKey: 'materia_id',
    as: 'bimestres',
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  });

  Bimestre.belongsTo(Materia, {
    foreignKey: 'materia_id',
    as: 'materia',
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  });

  return { Materia, Bimestre };
};
