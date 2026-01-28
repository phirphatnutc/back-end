const express = require("express");
const app = express();
const port = 3005;

app.use(express.json());

let drpartment = [
  { id: 1, name: "IT" },
  { id: 1, name: "DBT" },
];

app.get("/", (req, res) => {
  res.send("Mr.Peerapat");
});

app.get("/department", (req, res) => {
  res.send("department");
});

app.post("/department", (req, res) => {
  let newdepartment = {
    id: department.length + 1,
    name: req.body.name,
  };
  department.push(newdepartment);
  res.send(department);
});

app.listen(port, () => {
  console.log("Server Starting on port", port);
});
