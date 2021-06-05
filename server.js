
//Require Express Module
const express = require(`express`);

// Setting Express To A Variable
const app = express();

//Setting Port To A Variable
const port = 3000;

//Setting Beer To A Variable 
const beers = 99;

// Setting Index Route Using HTML
app.get(`/`, (req, res) => {
    res.send(`<h2> ${beers} bottles of beer on the wall</h2> <a href="/${beers}">take one down, pass it around</a>`)
});

//Setting Route To Bottles 
app.get(`/:number_of_bottles`, (req, res) => {
    let numOfBeers = parseInt(req.params.number_of_bottles);
    if (numOfBeers > 0) {
        numOfBeers = numOfBeers - 1
        res.send(`<h2> ${numOfBeers} bottles of beer on the wall</h2> <a href="/${numOfBeers}" bottles of beer>take one down, pass it around</a>`)
    }
    else {
        res.send(`<h2>No more beers. </h2><a href="/">Play Again</a>`)
    }
});
app.listen(port, () => {
    console.log('Listening', port)
});
