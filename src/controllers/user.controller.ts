import { Request, Response } from "express";
import UserService from "../services/user.service";

class UserController {
  async registerUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const user = await UserService.registerUser(userData);
      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const token = await UserService.loginUser(userData);
      res.json({ token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userUpdate = req.body;
      const updatedUser = await UserService.update(id, userUpdate);
      res.json(updatedUser);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await UserService.delete(id);
      res.json(deletedUser);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  async fetchOneById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.fetchOneById(id);
      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  async fetchOne(req: Request, res: Response) {
    try {
      const query = req.query;
      const user = await UserService.fetchOne(query);
      res.json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  async fetchAll(req: Request, res: Response) {
    try {
      const filter = req.query;
      const users = await UserService.fetch(filter);
      res.json(users);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
}

export default new UserController();
