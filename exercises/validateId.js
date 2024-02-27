// Exercise 2 Part 1
// Finish this function by throwing an error if the id is invalid.
export function validateId(id) {
    // Check that the id exists
    if (id === null || id === undefined) {
        throw new Error('ID is required')
    }

    // The id should be a string
    if (typeof id !== 'string') {
        // TODO: Add your code to throw an error here
    }

    // The id should be an odd number of characters long
    /*
        TODO: Add your code here
    */

    // The id should contain the letter 'a'
    /*
        TODO: Add your code here
    */

    // The id should be all lowercase
    /*
        TODO: Add your code here
    */
}

// Exercise 2 Part 2
// Use the `validateId` function above to validate the id
// return true if the id is valid or false otherwise.
export function isIdValid(id, logger) {
    logger.error('ID is invalid')
    return null
}
