# Day 2 Exercises

These exercises are back inside the exercises folder.

## Exercise 1: Async and Await

Lots of functions are asynchronous. They don't return a value immediately, but instead return a promise that will resolve to a value at some point in the future - once they're done with what they're doing.

Have a look at the [Async and Await](https://swe-docs.netlify.app/js/async-await.html) documentation for this exercise.

A nice tangible example of where you'd think about asynchronousity is with making breakfast. 

In this exercise, you'll be working with a set of functions that simulate making breakfast. It's a bit of a contrived example, but it's a good way to illustrate the concept.

To run the tests for this exercise, use `npm run test:d2e1`.

### Part 1: Making toast

Inside `exercises/breakfast.js`, you'll find a function `makeBreakfast()`.

All that's missing are some `async` and `await` keywords.

You'll need to use `await` to wait for the `toaster.toast()` function to finish.

### Part 2: Making coffee

Similar to the first part, you'll find a function `makeCoffee()` inside `exercises/breakfast.js`.

Again, all that's missing are some `async` and `await` keywords.

The `grinder.grind()` and `coffeeMaker.brew()` functions are asynchronous, so you'll need to use `await` to wait for them to finish.

### Part 3: Making breakfast

Finally, you'll find a function `makeBreakfast()` inside `exercises/breakfast.js`.

This function should return the toast and coffee that you made from the previous functions.

## Exercise 2: Error Handling

It's inevitable for things to go wrong. Perhaps a file doesn't exist, or a network request fails. Maybe a user enters a value that doesn't make sense.

Have a look at the [Error Handling](https://swe-docs.netlify.app/js/handling-errors.html) documentation for this exercise.

## Exercise 3: File I/O

[Reading and Writing Files](https://swe-docs.netlify.app/js/reading-and-writing-files.html)

## Extensions

### 

###