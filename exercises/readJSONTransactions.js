import fs from 'fs/promises'

export async function readJSONTransactions() {
  // Read the Transactions2013.json file
  const path = new URL('../data/Transactions2013.json', import.meta.url)
  const data = await fs.readFile(path)
  const obj = JSON.parse(data)
  // Use JSON.parse to convert the string into an array of objects
  // and return it
  return obj
}

const result = await readJSONTransactions()
console.log(result)