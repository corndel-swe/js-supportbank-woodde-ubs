<p align="center">
  <img width="200px" src="supportbank-logo.png" alt="Supportbank Logo" />
</p>

# Supportbank

Supportbank is a command-line interface (CLI) tool for various finance-related
tasks.

The aim of the project is to give users some useful features, to interact with
financial data stored on the user's computer, and make use of data on a server.

For example,

```bash
node cli convert currency 100 USD GBP
```

will convert currency for them.

## State of the project

Right now, some parts of the project have been written, but it has been
abandoned by the contractor, and there are a number of steps we need to take to
get it working.

Fortunately, the original developer was practising TDD, so there are some tests
to guide us!

## Technologies used

| Name        | Purpose                                |
| ----------- | -------------------------------------- |
| `mocha`     | Test the project                       |
| `commander` | Create the command-line interface      |
| `dotenv`    | Securely store configuration variables |
| `fetch`     | Retrieve data from a server            |

## Getting started

1. Fork the project

2. Clone the project locally

3. Open `day-1-exercises.md` and follow the instructions from there.

Good luck!
