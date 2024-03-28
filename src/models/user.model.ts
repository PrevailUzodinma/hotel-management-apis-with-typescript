import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    role: 'guest' | 'admin';
}

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['guest', 'admin'],
        default: 'guest'
    }
});

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;