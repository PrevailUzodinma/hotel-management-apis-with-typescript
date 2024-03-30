import { Request, Response } from 'express';
import RoomService from '../services/room.service';

/* 
This is the section of my application that handles client request received from routes, processes them and sends out a response to the client
*/
class RoomController {
    // create room
    async createRoom(req: Request, res: Response) {
        try {
            const reqBody = req.body;

            // Check if the room exists
            const existingRoom = await RoomService.fetchOne({
                name: reqBody.name,
            });

            if (existingRoom) {
                return res.status(403).json({
                    success: false,
                    message: "Room already exists",
                });
            }

            // If not, create the room and send a response
            const newRoom = await RoomService.create(reqBody);

            return res.status(201).json({
                success: true,
                message: "Room created successfully",
                data: newRoom,
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

    async updateRoom(req: Request, res: Response) {
        try {
            const roomId = req.params.id;
            const updateData = req.body;
            // Check if the room to edit is in the database
            const existingRoom = await RoomService.fetchOneById(roomId);
            if (!existingRoom) {
                res.status(403).json({
                    success: false,
                    message: "Room to edit does not exist",
                });
            }

            const updatedRoomData = await RoomService.update(roomId, updateData);
            res.status(200).json({
                success: true,
                message: "Room updated successfully",
                data: updatedRoomData,
            });
        } catch (error) {
            // Handle errors
            console.error("Error updating room:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    }
    async deleteRoom(req: Request, res: Response) {
        try {
          const roomId = req.params.id;
          //Check iif the room to delete is in the database
          const existingRoom = await RoomService.fetchOneById(roomId);
          if (!existingRoom) {
            res.status(403).json({
              success: false,
              message: "Room to delete does not exist",
            });
          }
    
          const deletedRoom = await RoomService.delete(roomId);
    
          res.status(200).json({
            success: true,
            message: "Room deleted successfully",
            data: deletedRoom,
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
          const roomId = req.params.id;
          // Check if room to fetch exists is in the database
          const existingRoom = await RoomService.fetchOneById(roomId);
    
          if (!existingRoom) {
            res.status(403).json({
              success: false,
              message: "Room to fetch does not exist",
            });
        }
    
            res.status(200).json({
              success: true,
              message: "Room fetched successfully",
              data: existingRoom,
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
          const fetchedRooms = await RoomService.fetch({});
    
          res.status(200).json({
            success: true,
            message: "ROoms fetched successfully",
            data: fetchedRooms,
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

export default new RoomController()

