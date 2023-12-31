const sequelize = require('../Source/Models/Connection')
const Pokemon = require('../Source/Models/Pokemon')

describe('Pokemon Model', () => {
  
  // Antes de todas las pruebas, sincronizar la base de datos y recrear la tabla
  beforeAll(async () => {
    await sequelize.sync({ force: true }) // Esto eliminará y recreará la tabla antes de ejecutar las pruebas
  })

  // Prueba: Debería crear una instancia de pokemon con todos sus atributos.
  it('Debería crear una instancia de pokemon con todos sus atributos.', async () => {
    const newPokemon = await Pokemon.create({
      id: 1,
      nombre: 'Charmander',
      imagen: 'charmander.jpg',
      vida: 39,
      ataque: 52,
      defensa: 43,
      velocidad: 65,
      altura: 12.67,
      peso: 82.55
    })

    // Verificar que los atributos del nuevo Pokemon sean los esperados
    expect(newPokemon.id).toBe(1)
    expect(newPokemon.nombre).toBe('Charmander')
    expect(newPokemon.imagen).toBe('charmander.jpg')
    expect(newPokemon.vida).toBe(39)
    expect(newPokemon.ataque).toBe(52)
    expect(newPokemon.defensa).toBe(43)
    expect(newPokemon.velocidad).toBe(65)
    expect(newPokemon.altura).toBe('12.67')
    expect(newPokemon.peso).toBe('82.55')

  })

  // Prueba: Debería tener validaciones y restricciones.
  it('Debería tener validaciones y restricciones.', async () => {
    // Intenta crear un Pokémon con datos inválidos y verifica que se produzca un error
    await expect(
      Pokemon.create({
        nombre: '', // Nombre vacío, incumple la restricción de longitud
        vida: 'String', // Valor no numérico, incumple la restricción de tipo
        altura: 'invalid', // Valor no numérico, incumple la restricción de tipo
      })
    ).rejects.toThrow() // la prueba espera que intentar crear un Pokémon con datos inválidos genere un error, y si no lo hace, la prueba fallará.
  })

})
