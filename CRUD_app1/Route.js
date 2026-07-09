import {Router} from "express";
import { allUsers, getUserById, createUser, updateUser, deleteUser } from "./Controller.js";

const router = Router();

router.get("/users", allUsers);

router.get("/users/:id", getUserById);

router.post("/create-user", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;