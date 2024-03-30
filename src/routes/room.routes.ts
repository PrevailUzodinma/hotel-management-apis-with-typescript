import express from "express";
import { Router } from 'express';
/* import { validate } from '../middlewares/validate';
import { authenticate } from '../middlewares/authenticate';
import { authorize } from '../middlewares/authorize'; */
import RoomController from "../controllers/room.controller";
//import { roomValidationSchema } from "../middlewares/validate.room";

const router: Router = express.Router();

router.post("/", RoomController.createRoom);
router.patch("/:id", RoomController.updateRoom);
router.delete("/:id", RoomController.deleteRoom);
router.get("/:id", RoomController.fetchOne);
router.get("/", RoomController.fetchMany);

export default router;