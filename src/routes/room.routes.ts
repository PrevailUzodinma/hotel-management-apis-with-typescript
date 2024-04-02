import express from "express";
import { Router } from 'express';
import authMiddleware  from '../middlewares/authMiddleware';
import authorizationMiddleware from '../middlewares/authorization.middleware';
import RoomController from "../controllers/room.controller";

const router: Router = express.Router();


router.post("/", authMiddleware, authorizationMiddleware(["admin"]), RoomController.createRoom);
router.patch("/:id", authMiddleware, authorizationMiddleware(["admin"]), RoomController.updateRoom);
router.delete("/:id", authMiddleware, authorizationMiddleware(["admin"]), RoomController.deleteRoom);
router.get("/:id", RoomController.fetchOne);
router.get("/", RoomController.fetchMany);

export default router;