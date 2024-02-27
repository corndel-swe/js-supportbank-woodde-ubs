# Day 1 Exercises

These exercises tie into the workshop later today. They're about setting up the project and getting it ready for us to work on!

## Exercise 1: Setting up the project

There's a few steps for setting up the supportbank project that haven't been done yet.

The documentation is available here: [Creating a Node project](https://swe-docs.netlify.app/js/node-projects.html).

We've made a start by creating folders and initialising a git repository, but there's a few more steps to go.

### Part 1: Setting up the npm project

1. We still need to initialise an `npm` project.
2. We need to install the mocha package.
3. We need to add test scripts to the newly created `package.json` file.

```
  "scripts": {
      /* qq add test scripts once all tests made */
  }
```

Once you've done all that, you should be able to run the tests with `npm run test:d1e1`.

### Part 2: Ignoring `node_modules`

Next, we'll want to add a `.gitignore` file to the project.

We'll want to ignore the `node_modules` folder so that we don't commit all of the packages we've installed.

## Exercise 2: Modularisation

Read the [Modularisation](https://swe-docs.netlify.app/js/import-export.html) page.

You'll have seen and used some `import` and `export` statements in the code you've been working with. This exercise is about setting that up for the project.

To run the tests for this exercise, use `npm run test:d1e2`.

### Enabling ES6 imports

Configure the `package.json` file to use ES6 imports.

You can check that this is working by running the test and seeing that it _doesn't_ throw the following error:

```
SyntaxError: Cannot use import statement outside a module
```

It might throw other errors, but that's okay for now.

### Exporting and importing

The code in `cli/transaction.js` uses the `Transaction` class from `models/Transaction.js`. Export the class from `models/Transaction.js` and import it into `cli/transaction.js`.

We have some transaction related methods in `cli/transaction.js`. Export these methods so that they can be used in other files.

4. There is also a `transactionController` object in `cli/transaction.js`. Export this as a default export so we can easily use it in Exercise 3.

## Exercise 3: Using Commander to set up a CLI

Read the page on [Making a CLI](https://swe-docs.netlify.app/js/making-a-cli.html).

Let's set up a CLI so that we can run the program from the command line.

1. Install the `commander` package.
2. Make a new file under `cli/index.js`.
3. Set up the CLI so that it parses the command line arguments.
4. Register the `transaction` command from `cli/transaction.js`.
