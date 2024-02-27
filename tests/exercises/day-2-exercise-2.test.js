import { strict as assert } from 'assert'
import { validateId, isIdValid } from '../../exercises/validateId.js'

describe('validateId', () => {
    it('should return true for valid ids', () => {
        const validId = 'abaci'
        validateId(validId)
    })

    it("should throw an error if the id isn't defined", () => {
        const invalidId = undefined
        assert.throws(
            () => validateId(invalidId),
            'Expected an error to be thrown for an undefined id'
        )
    })

    it("should throw an error if the id isn't a string", () => {
        const invalidId = 1
        assert.throws(
            () => validateId(invalidId),
            'Expected an error to be thrown for a non-string id'
        )
    })

    it("should throw an error if the id isn't an odd number of characters long", () => {
        const invalidId = 'abac'
        assert.throws(
            () => validateId(invalidId),
            'Expected an error to be thrown for an id with an even number of characters'
        )
    })

    it("should throw an error if the id doesn't contain the letter 'a'", () => {
        const invalidId = 'bbc'
        assert.throws(
            () => validateId(invalidId),
            'Expected an error to be thrown for an id without the letter "a"'
        )
    })

    it("should throw an error if the id isn't all lowercase", () => {
        const invalidId = 'aBaci'
        assert.throws(
            () => validateId(invalidId),
            'Expected an error to be thrown for an id with uppercase characters'
        )
    })
})

describe('isIdValid', () => {
    it('should return true for valid ids', () => {
        const logger = {
            error: () => {},
        }
        const validId = 'abaci'
        assert.equal(isIdValid(validId, logger), true)
    })

    it('should return false for invalid ids', () => {
        const logger = {
            error: () => {},
        }
        const invalidId = 'bbc'
        assert.equal(isIdValid(invalidId, logger), false)
    })

    it('should log an error if the id is invalid', () => {
        let loggedMessage = ''
        const logger = {
            error: (message) => {
                loggedMessage = message
            },
        }
        const invalidId = 'bbc'
        isIdValid(invalidId, logger)
        assert.ok(loggedMessage, 'Expected an error to be logged')
    })
})
