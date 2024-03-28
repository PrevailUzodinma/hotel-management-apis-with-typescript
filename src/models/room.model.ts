import mongoose, { Schema, Document, Model } from "mongoose";
import { IRoomtype } from "./roomtype.model";

export interface IRoom extends Document {
  name: string;
  roomtype: IRoomtype["_id"];
  price: number;
}

const roomSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  roomtype: {
    type: Schema.Types.ObjectId,
    ref: 'Roomtype',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Room: Model<IRoom> = mongoose.model<IRoom>("Room", roomSchema);

export default Room;