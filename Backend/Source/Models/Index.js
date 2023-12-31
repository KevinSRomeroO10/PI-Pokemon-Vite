const sequelize = require('./Connection')

const Pokemon = require('./Pokemon')
const Type = require('./Type')

Pokemon.belongsToMany(Type, { through: 'Pokemon_Type' }) // Pertenece a muchos
Type.belongsToMany(Pokemon, { through: 'Pokemon_Type' })

module.exports = { sequelize, Pokemon, Type}
