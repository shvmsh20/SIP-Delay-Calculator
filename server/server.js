const express = require("express");
const routes = require('./server/Routes/index');

const express = require('express')
app.use(express.json())

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/getResults", (req, res) => {
    console.log(req.query);
    res.status(0);
    res.send({ 
      message: "Hello from server!" });
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});