import express from "express";
const app = express();

const PORT = 3000;

app.get("/login", (req, res) => {
  console.log("login route controller activated");
  res.send("Login Page");
});

app.get("/signup", (req, res) => {
  console.log("signup route controller activated");
  res.send("Signup Page");
});

app.get("/reset-password", (req, res) => {
  console.log("reset-password route controller activated");
  res.sed("Reset Password Page");
});

//these middleware is always kept down here because it will catch any errors that occur in the route handlers above.
// error handling middleware for unknown routes (404)
app.use((req, res) => {
  console.log("404 route controller activated");
  res.status(404).send("Page Not Found");
});

//error handling middleware
// This middleware will catch any errors that occur in the route handlers above
app.use((err, req, res, next) => {
    console.log(err);
    // res.status(500).json({ message: "Internal Server Error", error: err.stack});
     res.status(500).json({ message: "Internal Server Error", error: err.message });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

