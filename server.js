const express = require("express");
const bodyParser = require("body-parser")
const fs = require("fs");
const app = express();

app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html")
})
app.get("/kontakt", (req, res) => {
    res.sendFile(__dirname + "/pages/kontakt.html")
})

app.get("/thanks", (req, res) => {
    res.sendFile(__dirname + "/pages/thanks.html")
})

app.post("/save", (req, res) => {
    fs.appendFileSync(__dirname + "/mails.txt", `
        **************
        ${req.body.email}
        ${req.body.poruka}
        ${new Date().toDateString()}
    `)
    res.redirect("/thanks")
})











app.listen(3000, () => {
    console.log('Server pokrenut');
})