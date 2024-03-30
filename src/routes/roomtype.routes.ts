import express from "express";
import { Router } from 'express';
/* import { validate } from '../middlewares/validate';
import { authenticate } from '../middlewares/authenticate';
import { authorize } from '../middlewares/authorize'; */
import RoomtypeController from "../controllers/roomtype.controller";
//import { roomValidationSchema } from "../middlewares/validate.room";

const router: Router = express.Router();

router.post("/", RoomtypeController.createRoomtype);
router.patch("/:id", RoomtypeController.updateRoomtype);
router.delete("/:id", RoomtypeController.deleteRoomtype);
router.get("/:id", RoomtypeController.fetchOne);
router.get("/", RoomtypeController.fetchMany);

export default router;