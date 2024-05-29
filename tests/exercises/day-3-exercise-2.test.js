import { strict as assert } from 'assert'
import { readJSONTransactions } from '../../exercises/readJSONTransactions.js'

describe('readJSONTransactions', () => {
    it('should read the transactions from the JSON file', async () => {
        const transactions = await readJSONTransactions()
        assert.deepEqual(transactions[0], {
            Date: '2013-01-01T00:00:00',
            FromAccount: 'Jon A',
            ToAccount: 'Gergana I',
            Narrative: 'Sandbox Help',
            Amount: 2.14,
        })
    })
})
