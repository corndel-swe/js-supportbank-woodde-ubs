# Day 3 Exercises

## Exercise 1: Environment Variables

Have a look at the docs on
[Environment Variables](https://tech-docs.corndel.com/js/environment-variables.html).

### Part 1: Making a `.env` file

Create a new file called `.env` in the root of your project. Add it to the
`.gitignore` file so that it doesn't get committed.

### Part 2: Installing `dotenv` and adding environment variables

Install the `dotenv` package.

Add the following environment variables to the `.env` file:

```
POKEAPI_URL=https://pokeapi.co/api/v2/
```

### Part 3: Using environment variables

You'll find a file called `pokeapi.js` in the `exercises` folder. The class
fetches data about Pokémon from the PokéAPI. It's currently hard-coded to use
the URL `https://pokeapi.co/api/v2/`.

Rewrite the constructor to use the environment variable `POKEAPI_URL` instead of
the hard-coded URL.

## Exercise 2: Fetching Data

It's useful to be able to fetch data from an API. Have a look at the
documentation on
[fetching data](https://tech-docs.corndel.com/js/fetching-data.html).

We've got a couple of methods already on the PokeAPI class as examples on how to
make a query to the PokeAPI. We can use these to get a list of "move"s and
information about a particular "move"

### Part 1: Get a list of Pokemon

Let's implement some functionality to get a list of Pokémon.

There's a `getPokemonList()` method that should return a list of Pokémon names.

You can use the `fetch` method like we have in the `move` endpoint to make a
request to the PokéAPI. The URL for the list of Pokémon is
`https://pokeapi.co/api/v2/pokemon/`.

You should return an array of strings for the list of Pokémon. The map method
will be useful here!

### Part 2: Get details about a Pokémon

Next, we'll implement a method to get details about a particular Pokémon.

There's a `getPokemonDetails(pokemon)` method that should return details about a
Pokémon.

Have a read of the PokeAPI documentation to see how you can get details about a
Pokémon [here](https://pokeapi.co/docs/v2#pokemon).

You should return the id as a number, name as a string, and types as an array of
strings for the pokemon.

## Exercise 3: JSON

Inside the data folder, there is a `Transactions2013.json` file that's written
in JSON. Have a look through the
[JSON documentation](https://tech-docs.corndel.com/js/working-with-json.html).

We'll want to read the file and parse it into a JavaScript object.

Open up `exercises/readJSONTransactions.js` and implement the
`readJSONTransactions` function. It should read the file and parse it into a
JavaScript object, and then return that object.

## Extension

You may have noticed that we don't get a complete list of Pokémon when we call
`getPokemonList()`. This is because the PokéAPI paginates the results.

Have a read of their documentation on how their pagination works and see if you
can implement a way to get a complete list of Pokémon.

The documentation can be found
[here](https://pokeapi.co/docs/v2#resource-listspagination-section).
