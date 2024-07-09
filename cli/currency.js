import { Command } from 'commander'
import Currency from '../models/Currency.js'
import 'dotenv/config'


const currencyConverter = new Command('currency')
const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${process.env.OPENEXCHANGERATES_API_KEY}`)
const data = await response.json()

// console.log(data)

currencyConverter
    .command('convert amt fromCurr toCurr')
    .description('Convert currency')
    .action((amt, fromCurr, toCurr) => {
        Currency.convert(amt, fromCurr, toCurr, data)

    })

export default currencyConverter