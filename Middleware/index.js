import express from "express";
const app = express();

import morgan from "morgan"; // third party middleware

const PORT = 3000; // stored in most of the cases in .env file

//1.Application level middleware
//middleware is applicable only for the routes which are defined after the middleware

// const logger = (req, res, next) => {
//     console.log(`${new Date()} Requested at http://${req.headers.host}${req.url} and method is ${req.method}`);
//     next(); // Call next() to pass control to the next middleware or route handler
// }

// app.use(logger); // Apply the logger middleware to all routes

//2.Third party middleware
// app.use(morgan("dev")); // similar to logger but more advanced and used in production
// app.use(morgan("combined"));

//3.Built-in middleware
//app.use(express.json()); // to parse incoming JSON data in the request body

// app.post("/login", (req, res) => {
//     res.send(req.body);
// });

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/login", (req, res) => {
    res.send("Login Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)                                                                                      
});



