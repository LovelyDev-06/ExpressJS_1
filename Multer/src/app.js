import express from "express";
import multer from "multer";

// multer has two engines
// 1. DiskStorage-> stores files on the server's file system
// 2. MemoryStorage-> stores files in RAM as Buffer objects

//1. DiskStorage (no need to remember the internal functions)
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");// specify the destination folder where files will be stored
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname);// specify the filename for the uploaded file
//     }
// });

//2. MemoryStorage (RAM is volatile, so files will be lost when the server restarts)
// after the cloud service provider (like Cloudinary, ImageKit, AWS) changes it url it can be stored in database as string,
// so we need to convert the file into buffer and store it in database
//this is useful when we want to store the file in database instead of server's file system
//when you query, the database will give it to server first and then server sends it to the client
const storage = multer.memoryStorage();

//client->upload.single('Image')->middleware for single file upload, 
// 'Image' is the name of the input field in the form->stores the uploaded file in req.file

// create middleware for file upload using multer not activate the middleware yet
const upload = multer({ storage: storage });

const app = express();

app.post("/upload",upload.single('Image'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    console.log(req.file.buffer);
    res.send("File uploaded successfully!");
});

export default app;