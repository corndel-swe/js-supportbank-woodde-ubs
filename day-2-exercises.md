# Day 2 Exercises

These exercises are back inside the exercises folder.

## Exercise 1: Async and Await

Lots of functions are asynchronous. They don't return a value immediately, but
instead return a promise that will resolve to a value at some point in the
future - once they're done with what they're doing.

Have a look at the
[Async and Await](https://tech-docs.corndel.com/js/async-await.html)
documentation for this exercise.

A nice tangible example of where you'd think about asynchronousity is with
making breakfast.

In this exercise, you'll be working with a set of functions that simulate making
breakfast. It's a bit of a contrived example, but it's a good way to illustrate
the concept.

To run the tests for this exercise, use `npm run test:d2e1`.

### Part 1: Making toast

Inside `exercises/breakfast.js`, you'll find a function `makeToast()`.

All that's missing are some `async` and `await` keywords.

You'll need to use `await` to wait for the `toaster.toast()` function to finish.

### Part 2: Making coffee

Similar to the first part, you'll find a function `makeCoffee()` inside
`exercises/breakfast.js`.

Again, all that's missing are some `async` and `await` keywords.

### Part 3: Making breakfast

Finally, you'll find a function `makeBreakfast()` inside
`exercises/breakfast.js`.

This function should return the toast and coffee that you made from the previous
functions.

## Exercise 2: Error Handling

It's inevitable for things to go wrong. Perhaps we try to read from a file that
doesn't exist, or a network request fails. Maybe our database returns a value
that doesn't make sense.

It's important to be able to raise and handle errors like these in our code.

Have a look at the
[Error Handling](https://tech-docs.corndel.com/js/handling-errors.html)
documentation for this exercise.

To run the tests for this exercise, use `npm run test:d2e2`.

### Throwing Errors

We'll be making a function that checks an id for validity. If the id is valid,
we'll return it. If it's not, for whatever reason, we'll throw an error.

We'll be implementing the `validateId` function inside
`exercises/validateId.js`.

### Catching Errors

Now that we've written a function that throws a bunch of errors, we'll write a
function that catches them.

It turns out that it's bad security practice to just throw errors willy nilly,
and for them to be potentially displayed to the user. We should catch them and
handle them gracefully.

Therefore, we'll be implementing a function `isIdValid()` inside
`exercises/validateId.js`. It should call `validateId` and catch any errors that
it throws, and return true or false depending on whether the id is valid.

There'll also be a `logger` object that gets passed in to `isIdValid()`. You
should call `logger.error(message)` to log if you encounter any errors from
`validateId`.

## Exercise 3: File I/O

Finally, we'll be looking at persisting data by reading and writing files.

Have a look at
[Reading and Writing Files](https://tech-docs.corndel.com/js/reading-and-writing-files.html).

Next, we have some exercises for you to complete in `exercises/fileIO.js`.

To run the tests for them, use `npm run test:d2e3`.
