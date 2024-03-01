// cli/index.js
import { program } from 'commander'
import transactionController from './transaction.js'

program.version('0.1.0').description('A CLI health tracker')

program.addCommand(transactionController)

program.parse(process.argv)
