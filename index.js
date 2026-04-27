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
    count: students.length,
    results: students,
  });
});

app.get("/students/:id", (req, res) => {
  const student = students.find((st) => req.params.id == st.id);
  if (!student) return res.status(404).json({ results: "student not found" });
  res.json({
    count: 1,
    results: student,
  });
});

app.post("/students", (req, res) => {
  const found = students.find((st) => req.body.id == st.id);
  if (!found) {
    students.push(req.body);
    return res.status(201).json({ results: req.body });
  }
  res.status(400).json({ results: "couldn't add student" });
});

app.patch("/students/:id", (req, res) => {
  const student = students.find((st) => req.params.id == st.id);
  if (student) {
    Object.keys(req.body).forEach((key) => {
      student[key] = req.body[key];
    });
    res.status(200).json({ results: student });
  }
});

app.delete("/students/:id", (req, res) => {
  students = students.filter((st) => req.params.id != st.id);
  res.sendStatus(200);
});

app.listen(8000, () => {
  console.log("server is up and running at port 8000");
});
