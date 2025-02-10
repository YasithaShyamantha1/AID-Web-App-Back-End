import express from "express";
import { createUser } from "../application/userController.js";

const usersRouter = express.Router();

usersRouter.post("/", createUser);

export default usersRouter;