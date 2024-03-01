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
    it('should have a POKEAPI_URL environment variable', () => {
        const pokeapi = process.env.POKEAPI_URL
        assert.ok(pokeapi, 'POKEAPI_URL environment variable not found')
    })
})
