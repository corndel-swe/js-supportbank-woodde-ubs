export class Transaction {
    static makeLog(from, to, amount) {
        console.log(`Transfer ${amount} from ${from} to ${to}`)
    }
}

export default Transaction