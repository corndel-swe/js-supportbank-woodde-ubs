import { strict as assert } from 'assert'
import { getPokemonList } from '../../exercises/pokeAPI.js'

describe('PokeAPI', () => {
  it('should get a list of pokemon', async () => {
    const pokemon = getPokemonList()
    assert.ok(pokemon.length > 0)
    assert.ok(pokemon.includes('bulbasaur'))
  })
})
