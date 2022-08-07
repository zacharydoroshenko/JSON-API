const app = require('express')();
const PORT = 8080;

const fs = require("fs");
const text = fs.readFileSync("text.txt").toString();


const obj = JSON.parse(text);

app.listen(
    PORT,
    () => {
        console.log(`it's alive on http://localhost:${PORT}`)
        console.log(text)
    }
);

app.get('/text', (req, res) => {

    res.status(200).send(obj)

});