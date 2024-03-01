import { strict as assert } from 'assert'
import { PokeAPI } from '../../exercises/pokeAPI.js'

describe('PokeAPI', () => {
    before(() => {
        process.env.POKEAPI_URL = 'https://pokeapi.co/api/v2'
    })

    it('should use the POKEAPI_URL environment variable', () => {
        const testUrl = 'TEST_URL'
        process.env.POKEAPI_URL = testUrl
        const api = new PokeAPI()
        assert.equal(api.url, testUrl)
    })

    it('should get a list of pokemon', async () => {
        const api = new PokeAPI()
        const pokemon = await api.getPokemonList()
        assert.ok(pokemon.length > 0)
        assert.ok(pokemon.includes('bulbasaur'))
    })

    it('should get details for a pokemon', async () => {
        const api = new PokeAPI()
        const details = await api.getPokemonDetails('bulbasaur')
        assert.equal(details.id, 1)
        assert.equal(details.name, 'bulbasaur')
        assert.ok(details.types.includes('grass'))
        assert.ok(details.types.includes('poison'))
    })
})
