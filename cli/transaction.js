import { Command } from 'commander'
import Transaction from '../models/Transaction.js'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    // TODO
    const transaction = new Transaction(from, parseInt(amount))
    console.log(transaction)
  })

export default transactionController
