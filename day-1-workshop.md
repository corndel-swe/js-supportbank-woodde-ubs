# Day 1 Workshop

Now that you've got a working project, it's time to start adding some
functionality to it.

## Currency converter

Let's write a currency converter. It should take an input like the following:

```bash
node cli convert currency 100 USD GBP
```

and return the equivalent amount in the second currency.

Feel free to hard-code the [exchange rates](https://www.google.com/search?q=1+usd+to+gbp) for now. We'll improve this in a later
workshop.

## Investment calculator

Our users might want an investment calculator.

Let's say they invest $1500 at a rate of 4% over 12 years with [simple interest](https://www.bbc.co.uk/bitesize/guides/zv9p34j/revision/2).

```bash
node cli invest simple 1500 4 12
```

The above command should calculate the projected value of the investment.

Add a similar command for an investment with [compound interest](https://www.bbc.co.uk/bitesize/articles/z2jfp4j#zhv94xs).

You could represent investments as classes.