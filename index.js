const express = require('express')
const app = express();
const port = 3005;

app.get('/',(req, res) => {
    res.send("Mr.Peerapat");
});

app.listen(port, () => {
  console.log("Server Starting on port", port);
});