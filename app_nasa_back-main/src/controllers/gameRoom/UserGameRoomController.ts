import { Request, Response } from "express";
import UserGameRoomModel from "../../models/gameRoom/UserGameRoomModel";

class UserGameRoomController {
  public static async createUserGameRoom(req: Request, res: Response) {
    try {
      const { user_account_id, game_room_id } = req.body;

      const newUserGameRoom = await UserGameRoomModel.create({
        user_account_id,
        game_room_id,
      });

      res.status(201).json(newUserGameRoom);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user game room entry." });
    }
  }

  public static async updateUserGameRoom(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const [updatedRowsCount, updatedRows] = await UserGameRoomModel.update(
        req.body,
        {
          where: { id },
          returning: true,
        }
      );

      if (updatedRowsCount === 0) {
        return res
          .status(404)
          .json({ error: "User game room entry not found." });
      }

      res.status(200).json(updatedRows[0]);
    } catch (error) {
      res.status(500).json({ error: "Failed to update user game room entry." });
    }
  }

  public static async deleteUserGameRoom(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedCount = await UserGameRoomModel.destroy({
        where: { id },
      });

      if (deletedCount === 0) {
        return res
          .status(404)
          .json({ error: "User game room entry not found." });
      }

      res
        .status(200)
        .json({ message: "User game room entry deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user game room entry." });
    }
  }

  public static async getAllUserGameRooms(req: Request, res: Response) {
    try {
      const usersGameRooms = await UserGameRoomModel.findAll();
      res.status(200).json({ usersGameRooms });
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve users in game room." });
    }
  }
}

export default UserGameRoomController;
