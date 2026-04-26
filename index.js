const express = require("express");

const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 21 },
  { id: 4, name: "David", age: 23 },
  { id: 5, name: "Eve", age: 20 },
  { id: 6, name: "Frank", age: 22 },
  { id: 7, name: "Grace", age: 21 },
  { id: 8, name: "Heidi", age: 23 },
  { id: 9, name: "Ivan", age: 20 },
  { id: 10, name: "Judy", age: 22 },
];

app.get("/students", (req, res) => {
  res.json({
    count: students.size(),
    results: students,
  });
});

app.listen(8000, () => {
  console.log("server is up and running at port 8000");
});
