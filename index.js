const express = require("express");
const app = express();
const port = 3000;

app.get("/battery/status", async (req, res) => {
  const respose = await axios.get('http:/localhost:3000/battery/status');
  res.json("GET Status");
});

app.post("/battery/discharge", (req, res) =>{
    res.json("POST Charge");
})

app.post("/battery/charge", (req, res) =>{
    res.json("POST Discharge");
})

app.get("/battery/history", (req, res) => {
    res.json("GET History");
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
