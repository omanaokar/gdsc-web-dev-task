const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!")
})

//Express server is set up on port 3000
app.listen(PORT, () => {
    console.log("Server is listening on "+PORT);
})

