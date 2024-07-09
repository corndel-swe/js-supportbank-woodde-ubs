import { program } from 'commander'
import transactionController from './transaction.js'
import billController from './bill.js'
import currencyConverter from './currency.js'

program.version('0.1.0').description('SupportBank')

program.addCommand(transactionController)
program.addCommand(billController)
program.addCommand(currencyConverter)

program.parse(process.argv)
