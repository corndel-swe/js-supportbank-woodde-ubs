# Day 1 Workshop

Now that you've got a working project, it's time to start adding some
functionality to it.

## Currency converter

Let's write a currency converter. It should take an input like the following:

```bash
node cli convert 100 USD GBP
```

and return the equivalent amount in the second currency.

Feel free to hard-code the exchange rates for now. We'll improve this in a later
workshop.

## Transaction aggregator

Let's write a command to add transactions to keep track of.

This command should add a transaction to a list of transactions in memory.

You can use a class to represent a transaction.

```bash
node cli transaction add "2014-01-01" "Jon A" "Joe G" 100 "Dinner"
```

This following command should list the transactions added.

```bash
node cli transaction list
```

```
On 2014-01-01, Jon A sent Jon B £100 for Dinner
```

You can add more functionality, such as:

```bash
node cli transaction sum "Jon A"
```

```
Jon A has a balance of £-100
```

This would total the transactions for Jon A and return the total amount they owe
or are owed.
