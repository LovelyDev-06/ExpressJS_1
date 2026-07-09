import express from "express";
import router from "./src/routes/auth.routes.js";


const app = express();
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});