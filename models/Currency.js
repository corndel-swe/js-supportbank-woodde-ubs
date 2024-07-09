const USDGBP = 0.78
const EURGBP = 0.85


export class Currency {
    static convert(amt, fromCurr, toCurr, data) {
        let answer = 0
        if ((fromCurr === "USD") && (toCurr === "GBP")) {
            //TODO: change this hardcoded value to values from the API
            const conversionRate = data.rates.GBP
            answer = amt * conversionRate
            console.log(`${fromCurr} to ${toCurr} Conversion = ${answer} ${toCurr}`)
        } else if ((fromCurr === "USD") && (toCurr === "ZAR")) {
            const conversionRate = data.rates.ZAR
            answer = amt * conversionRate
            console.log(`${fromCurr} to ${toCurr} Conversion = ${answer} ${toCurr}`)
        } else {
            console.log("Sorry, unknown currency")
        }


    }
}


export default Currency