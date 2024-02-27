import { existsSync } from 'fs'
import { strict as assert } from 'assert'

describe('Project', () => {
    it('should have a package.json file in the root', () => {
        const packageJsonPath = './package.json'
        const packageJsonExists = existsSync(packageJsonPath)
        assert.ok(packageJsonExists, 'package.json file not found')
    })
})
