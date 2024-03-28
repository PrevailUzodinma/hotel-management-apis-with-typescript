import Room, { IRoom } from '../models/room.model';

/* This part of my code base handles reusable business logic of my application that can be used across different parts of my application, eg database queries.
like CRUD operations*/

// making these function calls asynchronous because database queries take some time
class RoomService {
    // create a room
    async create(roomData: Partial<IRoom>): Promise<IRoom> {
        return await Room.create(roomData);
    }
    // edit a room
    async update(id: string, roomUpdate: Partial<IRoom>): Promise<IRoom | null> {
        return await Room.findByIdAndUpdate(id, roomUpdate, {
            new: true
        });
    }
    // delete a room
    async delete(id: string): Promise<IRoom | null> {
        return await Room.findByIdAndDelete(id);
    }
    // fetch a single room by id
    async fetchOneById(id: string): Promise<IRoom | null> {
        return await Room.findById(id);
    }
    // fetch a single room by any filter
    async fetchOne(query: any): Promise<IRoom | null> {
        return await Room.findOne(query);
    }
    // fetch all rooms
    async fetch(filter: any): Promise<IRoom[]> {
        return await Room.find(filter);
    }
}

export default new RoomService();