import { Request, Response } from "express";
import UserModel from "../../models/gamePage/UserModel";
import bcrypt from "bcrypt";

class UserController {
  public static async createUser(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;

      const password_hash = await bcrypt.hash(password, 10);

      const newUser = await UserModel.create({
        username,
        email,
        password_hash,
      });

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user account." });
    }
  }

  public static async updateUser(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      const updatedAccount = await UserModel.update(req.body, {
        where: { user_id },
      });
      res.status(200).json(updatedAccount);
    } catch (error) {
      res.status(500).json({ error: "Failed to update user account." });
    }
  }

  public static async deleteUser(req: Request, res: Response) {
    try {
      const { user_id } = req.params;
      await UserModel.destroy({ where: { user_id } });
      res.status(200).json({ message: "User account deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user account." });
    }
  }

  public static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserModel.findAll();
      res.status(200).json({ users });
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve user accounts." });
    }
  }
}

export default UserController;
