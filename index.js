const express = require('express');
const mongoose  = require('mongoose')
const url = 'mongodb+srv://omanaokar:Omprasad%2511@cluster0.tfwsrtg.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection

const app = express();
const PORT = 3000;

const ItemRoute = require(__dirname + '/routes/items'); 
const InvoiceRoute = require(__dirname + '/routes/invoices'); 


db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log("Connected to DB")
})

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.use('/api/item', ItemRoute)
app.use('/api/invoice', InvoiceRoute)



//Express server is set up on port 3000
app.listen(PORT, () => {
    console.log("Server is listening on "+PORT);
})

