export class PokeAPI {
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/'
    }

    async getMoves() {
        const url = new URL(`move`, this.url)
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    async getMovePower(move) {
        const url = new URL(`move/${move}`, this.url)
        const response = await fetch(url)
        const data = await response.json()
        return data.power
    }

    // Exercise 2, Part 1
    async getPokemonList() {
        const url = new URL('TODO', this.url)
        const response = null // TODO
        const data = null // TODO

        const pokemon = []

        return pokemon
    }

    // Exercise 2, Part 2
    async getPokemonDetails(pokemon) {
        // Make the request to the API here

        const id = 0
        const name = ''
        const types = []

        return { id, name, types }
    }
}
