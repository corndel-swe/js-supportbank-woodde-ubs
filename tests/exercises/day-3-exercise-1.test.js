import { strict as assert } from 'assert'
import { existsSync } from 'fs'
import 'dotenv/config'

describe('Dotenv', () => {
  it('should have a .env file in the root', () => {
    const envPath = './.env'
    const envExists = existsSync(envPath)
    assert.ok(envExists, '.env file not found')
  })
})

describe('Environment Variables', () => {
  it('should have a SECRET_KEY environment variable', () => {
    const pokeapi = process.env.SECRET_KEY
    assert.ok(pokeapi, 'SECRET_KEY environment variable not found')
  })
})
