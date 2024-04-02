import express from "express";
import { Router } from 'express';

import UserController from "../controllers/user.controller";

const router: Router = express.Router();


router.post("/signup", UserController.registerUser);
router.get("/login", UserController.loginUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id",  UserController.deleteUser);
router.get("/:id", UserController.fetchOne);
router.get("/", UserController.fetchAll);

export default router;