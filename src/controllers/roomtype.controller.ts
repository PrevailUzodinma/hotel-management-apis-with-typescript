import { Request, Response } from 'express';
import RoomtypeService from '../services/roomtype.service';
/* 
This is the section of my application that handles client request received from routes, processes them and sends out a response to the client
*/
class RoomtypeController {
  // create room
  async createRoomtype(req: Request, res: Response) {
    try {
      const reqBody = req.body;

      // Check if the room exists
      const existingRoomtype = await RoomtypeService.fetchOne({
        name: reqBody.name,
      });

      if (existingRoomtype) {
        return res.status(403).json({
          success: false,
          message: "Room already exists",
        });
      }

      // If not, create the roomtype and send a response
      const newRoomtype = await RoomtypeService.create(reqBody);

      return res.status(201).json({
        success: true,
        message: "Roomtype created successfully",
        data: newRoomtype,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating room:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async updateRoomtype(req: Request, res: Response) {
    try {
      const roomtypeId = req.params.id;
      const updateData = req.body;
      // Check if the roomtype to edit is in the database
      const existingRoomtype = await RoomtypeService.fetchOneById(roomtypeId);
      if (!existingRoomtype) {
        res.status(403).json({
          success: false,
          message: "Roomtype to edit does not exist",
        });
      }

      const updatedRoomtypeData = await RoomtypeService.update(
        roomtypeId,
        updateData
      );
      res.status(200).json({
        success: true,
        message: "Roomtype updated successfully",
        data: updatedRoomtypeData,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating room:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async deleteRoomtype(req: Request, res: Response) {
    try {
      const roomtypeId = req.params.id;
      //Check if the roomtype to delete is in the database
      const existingRoomtype = await RoomtypeService.fetchOneById(roomtypeId);
      if (!existingRoomtype) {
        res.status(403).json({
          success: false,
          message: "Roomtype to delete does not exist",
        });
      }

      const deletedRoomtype = await RoomtypeService.delete(roomtypeId);

      res.status(200).json({
        success: true,
        message: "Roomtype deleted successfully",
        data: deletedRoomtype,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating room:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async fetchOne(req: Request, res: Response) {
    try {
      const roomtypeId = req.params.id;
      // Check if roomtype to fetch exists is in the database
      const existingRoomtype = await RoomtypeService.fetchOneById(roomtypeId);

      if (!existingRoomtype) {
        res.status(403).json({
          success: false,
          message: "Roomtype to fetch does not exist",
        });
      }

      res.status(200).json({
        success: true,
        message: "Roomtype fetched successfully",
        data: existingRoomtype,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating room:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async fetchMany(req: Request, res: Response) {
    try {
      const fetchedRoomtypes = await RoomtypeService.fetch({});

      res.status(200).json({
        success: true,
        message: "Roomtypes fetched successfully",
        data: fetchedRoomtypes,
      });
    } catch (error) {
      // Handle errors
      console.error("Error creating room:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

export default new RoomtypeController();
