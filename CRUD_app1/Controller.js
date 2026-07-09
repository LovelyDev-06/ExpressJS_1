import users from "./Database.js"
const allUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
    if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  users.push({ id: users.length + 1, name, email });
  res.status(201).json({ message: "User created successfully" });
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find((u) => u.id === userId);
    if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
    user.name = name;
    user.email = email;
    res.json({ message: "User updated successfully" });
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
};

export { allUsers, getUserById, createUser, updateUser, deleteUser };