import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRoomtype extends Document {
  name: string;
}

const roomtypeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Roomtype: Model<IRoomtype> = mongoose.model<IRoomtype>("Roomtype", roomtypeSchema);

export default Roomtype;