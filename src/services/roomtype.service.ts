import Roomtype, { IRoomtype } from "../models/roomtype.model";

/* This part of my code base handles reusable business logic of my application that can be used across different parts of my application, eg database queries.
like CRUD operations*/

// making these function calls asynchronous because database queries take some time

class RoomtypeService {
    // create a roomtype
    async create(roomtypeData: Partial<IRoomtype>): Promise<IRoomtype> {
        return await Roomtype.create(roomtypeData);
    }
    // edit a roomtype
    async update(id: string, roomtypeUpdate: Partial<IRoomtype>): Promise<IRoomtype | null> {
        return await Roomtype.findByIdAndUpdate(id, roomtypeUpdate, {
            new: true
        });
    }
    // delete a roomtype
    async delete(id: string): Promise<IRoomtype | null> {
        return await Roomtype.findByIdAndDelete(id);
    }
    // get a single roomtype
    async fetchOneById(id: string): Promise<IRoomtype | null> {
        return await Roomtype.findById(id);
    }
    // get a room by specific parameter
    async fetchOne(query: any): Promise<IRoomtype | null> {
        return await Roomtype.findOne(query);
    }
    // get all roomtypes
    async fetch(filter: any): Promise<IRoomtype[]> {
        return await Roomtype.find(filter);
    }
}

export default new RoomtypeService();