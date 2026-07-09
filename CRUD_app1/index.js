import express from "express";
import router from "./Route.js";

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
