import express from "express";
import { Router } from 'express';
import authMiddleware  from '../middlewares/authMiddleware';
import authorizationMiddleware from '../middlewares/authorization.middleware';
import RoomtypeController from "../controllers/roomtype.controller";

const router: Router = express.Router();


router.post("/", authMiddleware, authorizationMiddleware(["admin"]), RoomtypeController.createRoomtype);
router.patch("/:id", authMiddleware, authorizationMiddleware(["admin"]), RoomtypeController.updateRoomtype);
router.delete("/:id", authMiddleware, authorizationMiddleware(["admin"]), RoomtypeController.deleteRoomtype);
router.get("/:id", RoomtypeController.fetchOne);
router.get("/", RoomtypeController.fetchMany);

export default router;