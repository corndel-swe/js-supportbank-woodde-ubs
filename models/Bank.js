export class Bank {

    constructor() {
        this.accounts = []
    }

    addAccount(name) {
        let account = new Account(name, 0)
        this.accounts.push(account)
    }

    processTransaction(to, from, amount) {
        if (this.accounts.filter(account => account.name === to) {
            this.addAccount(to)

        }
        if (this.accounts.filter(account => account.name === from)) {

        }
    }
        
        )
}