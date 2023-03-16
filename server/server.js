const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/getResults", (req, res) => {
    console.log(req.query);
    res.json({ message: "Hello from server!" });
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});