export async function getPokemonList() {
  // TODO
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const data = await response.json()
  return data.results.map(pokeName => pokeName.name)

}
const data = await getPokemonList()
console.log(data)
