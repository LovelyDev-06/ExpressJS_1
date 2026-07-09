import express from "express";

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 4, name: "Bob Brown", email: "bob.brown@example.com" }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});
//global middleware to parse JSON request bodies
app.use(express.json());

app.post("/create-user", (req, res) => {
  const { name, email } = req.body;
  users.push({ id: users.length + 1, name, email });
  res.status(201).json({ message: "User created successfully" });
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = name;
  user.email = email;

  res.json({ message: "User updated successfully" });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);  
  users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});