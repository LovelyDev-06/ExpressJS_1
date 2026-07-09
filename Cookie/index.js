import express from "express";

import cookieParser from "cookie-parser";
const app = express();

//create a middleware to parse cookies
app.use(cookieParser());

const PORT = 3000;

app.get("/set-cookies", (req, res) => {
    res.cookie("theme", "dark",{
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true, // cookie cannot be accessed by client-side JavaScript using document.cookie
        secure: true, // cookie will only be sent over HTTPS but localhost is also considered secure
        sameSite: "strict", // cookie will only be sent to the same site preventing CSRF attacks
    });
    res.send("Cookie has been set!");
});

app.get("/get-cookies", (req, res) => {
    // raw cookies from the request headers is a string, so we need to parse it to get an object
    // const cookies = req.headers.cookie;
    // console.log(typeof cookies);
    // res.send(`Cookies: ${cookies}`);
    const Parsecookies = req.cookies;
    console.log(typeof Parsecookies);
    res.send(Parsecookies);
});

app.get("/clear-cookies", (req, res) => {
    res.clearCookie("theme");
    res.send("Cookie has been cleared!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});