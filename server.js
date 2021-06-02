//Setting up Express server

const express = require(`express`);

//Setting Express module to a variable

const app = express(); 

//Linking HTML to Express & 99 Bottles of beer 

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname })
  });

// app.listen(3000);

// route to 98 bottles

app.get(`/98`, (req, res)  => {
    res.send(`98 Bottles of beer on the wall`);
    });
    
    app.listen(3000);

//route to all other beers 

// app.get("/:number_of_beers" function, (req, res) {;
//     res.send(`97 Bottles of beer on the wall`);
//     });
    
//     app.listen(3000);
// I thought tried to make another HTML and had no clue how to write this out as a function


