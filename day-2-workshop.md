# Day 2 Workshop

## Reading Transactions

The support team keep their records in CSV format. Their records for 2014 are
stored in Transactions2014.csv

Open it in Excel. Note that there’s a header row, telling you what each column
means. Every record has a date and represents a payment from one person to
another person. There’s also a narrative field which describes what the payment
was for.

The person in the ‘From’ column is paying money, so the amount needs to be
deducted from their account. The person in the ‘To’ column is being paid, so the
amount needs to be added to their account.

Use a class for each type of object you want to create.

You should add two commands:

-   `node cli list all` – should output the names of each person, and the total
    amount of money they should receive from the bank. (It could be a negative
    number, if they owe the bank money!)

-   `node cli list <account name>` – should print a list of every transaction,
    with the date and narrative, for that person’s account. For example,
    `node cli list "jon a"` would list all of Jon A’s transactions.

### Hints

You can use `string.split` to split several lines of text into an array.

You can then use it again to separate out each line into values using the
commas.
