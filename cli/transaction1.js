import { Command } from 'commander'
import Transaction from '../models/Transaction.js'
import fs from 'fs/promises'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {

    Transaction.makeLog(from, to, amount)
  })

// 1. Add a command to transaction controller "summarise all"

transactionController
  .command("summarise all")
  .description('Should output the names of each person + the total amount of money they should receive')
  .action(async () => {
    // Read all the lines from the CSV (fs read file)
    const path = new URL('../data/Transactions2014.csv', import.meta.url)
    // put the data from the files into some objects 
    let content = await fs.readFile(path, 'utf-8')
    let lines = content.split('\n').slice(1)
    let transactions = []
    // iterate through the list of transactions
    lines.forEach(line => {

      // split into parts (split(','))
      let transactionParts = line.split(',')

      transactions.push(transactionParts)
      //console.log(transactionParts)
    })
    // at this point we have an array of transactions.  
    // now, we need to get an array of people.
    let names = [...new Set(transactions.map(transaction => transaction[1]))]

    //loop through each name
    names.forEach(name => {
      let totalFrom = transactions.filter(transaction => { return transaction[1] === name }).reduce((acc, cur) => acc + parseFloat(cur[4]), 0)
      let totalTo = transactions.filter(transaction => { return transaction[2] === name }).reduce((acc, cur) => acc + parseFloat(cur[4]), 0)

      let balance = (totalTo - totalFrom).toFixed(2)
      console.log(`Name: ${name}, Balance: ${balance}`)
    })
  })

export default transactionController


// then we have parts of the transaction

// let bank = new Bank()
// bank.processTransaction(transactionParts[1], transactionParts[2], transactionParts[4])

// store the relevant information
// object: Account (name, amount)
// object: Bank {accounts:[Account], createAccount(), deductMoney(), addMoney(), processTransaction()}

// Account object {name, amount}
// parse the objects to print names and amounts to console
// Iterate over the list of people, get name and amount (for each person)
// print to console(persons, amounts)