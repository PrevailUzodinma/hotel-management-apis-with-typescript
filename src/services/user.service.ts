import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user.model";
import dotenv from "dotenv";

dotenv.config();
const secret: string | undefined = process.env.JWT_SECRET;

class UserService {
  // create/register a user
  async registerUser(userData: {
    username: string;
    password: string;
    role: string;
  }): Promise<IUser> {
    const { username, password, role } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      role,
    });

    return newUser;
  }
  async loginUser(userData: {
    username: string;
    enteredPassword: string;
  }): Promise<string> {
    const { username, enteredPassword } = userData;
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      throw new Error("User does not exist");
    }
    // take user password and compare to entered password
    const isPasswordValid = await bcrypt.compare(
      enteredPassword,
      existingUser.password
    );
    if (!isPasswordValid) {
      throw new Error("Invalid Password");
    }
    const token = jwt.sign({ userId: existingUser._id }, secret!);
    return token;
  }

  // edit a user
  async update(id: string, userUpdate: Partial<IUser>): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, userUpdate, {
      new: true,
    });
  }

  // delete a user
  async delete(id: string): Promise<IUser | null> {
    return await User.findByIdAndDelete(id);
  }

  // fetch a single user by id
  async fetchOneById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  // fetch a single user by any filter
  async fetchOne(query: any): Promise<IUser | null> {
    return await User.findOne(query);
  }

  // fetch all users
  async fetch(filter: any): Promise<IUser[]> {
    return await User.find(filter);
  }
}

export default new UserService();