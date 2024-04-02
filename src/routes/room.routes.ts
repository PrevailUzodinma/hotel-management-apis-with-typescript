import express from "express";
import { Router } from 'express';
import authMiddleware  from '../middlewares/authMiddleware';
import authorizationMiddleware from '../middlewares/authorization.middleware';
import RoomController from "../controllers/room.controller";

const router: Router = express.Router();

router.use(authMiddleware);

router.post("/", authorizationMiddleware(["admin"]), RoomController.createRoom);
router.patch("/:id", authorizationMiddleware(["admin"]), RoomController.updateRoom);
router.delete("/:id", authorizationMiddleware(["admin"]), RoomController.deleteRoom);
router.get("/:id", RoomController.fetchOne);
router.get("/", RoomController.fetchMany);

export default router;