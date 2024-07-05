import { Command } from 'commander'
import Currency from '../models/Currency.js'

const currencyConverter = new Command('currency')

currencyConverter
    .command('convert amt fromCurr toCurr')
    .description('Convert currency')
    .action((amt, fromCurr, toCurr) => {
        Currency.convert(amt, fromCurr, toCurr)

    })

export default currencyConverter