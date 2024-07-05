const USDGBP = 0.78
const EURGBP = 0.85

export class Currency {
    static convert(amt, fromCurr, toCurr) {
        let answer = 0
        if ((fromCurr === "USD") && (toCurr === "GBP")) {
            answer = amt * USDGBP
            console.log(`${fromCurr} to ${toCurr} Conversion = ${answer} ${toCurr}`)
        } else if ((fromCurr === "EUR") && (toCurr === "GBP")) {
            answer = amt * EURGBP
            console.log(`${fromCurr} to ${toCurr} Conversion = ${answer} ${toCurr}`)
        } else {
            console.log("Sorry, unknown currency")
        }


    }
}


export default Currency