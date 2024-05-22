import { existsSync } from 'fs'
import { strict as assert } from 'assert'
import { exec } from 'node:child_process'

describe('cli/index.js', () => {
  it('should exist', () => {
    const cliPath = './cli/index.js'
    const cliExists = existsSync(cliPath)
    assert.ok(cliExists, 'cli/index.js not found')
  })

  it('should use commander', (done) => {
    exec(`node ./cli/index.js help`, (error, stdout, stderr) => {
      assert.ok(!error)
      done()
    })
  })

  it('should register a command from transactionController', (done) => {
    exec(`node ./cli/index.js --help`, (error, stdout, stderr) => {
      if (error) {
        done(error)
        return
      }

      assert.ok(stdout.includes('transaction'), 'transaction is not a command')
      done()
    })
  })

  it('should print out something for transaction log', (done) => {
    const command = 'transaction log a b 1'
    exec(`node ./cli/index.js ${command}`, (error, stdout, stderr) => {
      assert.ok(!!stdout)
      done()
    })
  })
})
