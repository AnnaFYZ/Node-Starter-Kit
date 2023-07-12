const express = require("express");
const app = express();

app.get("/", (req, res) => {
    let searchQuery = req.query.search
    res.send("Hello Everybody! Are you looking for " + searchQuery )
})

app.get("/chocolate", (req, res) => {
    let count = req.query.quantity
    let chocolate = { "1" : 1,
"2" : 2,
"3" : 3,
"4" : 4,
"12" : "too much!!!"}
    
    res.send("Mmmmm, chocolate! You won   " + chocolate[count]) + " bars"})

app.get("/node", (req, res) => {
    let val1 = req.query.value1;
    let val2 = req.query.value2;
    let result = Number(val1) + Number(val2);
    res.send(`Node is working for you...... the sum is ${result}`)});

app.get("/codeyourfuture", (req, res) => res.send("Code Your Future, come on, you can do it!!!!"));

app.listen(3000, () => console.log("Server is listening on port 3000. Ready to accept requests!"))