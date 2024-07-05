import { Command } from 'commander'
import Bill from '../models/Bill.js'

const billController = new Command('bill')

billController
  .command('split <total> <numPerson>')
  .description('Split the bill by number of persons to the console')
  .action((total, numPerson) => {
    Bill.splitBill(total, numPerson)

  })

export default billController