import { Request, Response } from "express";
import GameRoomModel from "../../models/gameRoom/GameRoomModel";

class GameRoomController {
  // Create a new game room
  public static async createGameRoom(req: Request, res: Response) {
    try {
      const { name, description, creator_id } = req.body;

      const newGameRoom = await GameRoomModel.create({
        name,
        description,
        creator_id,
      });

      res.status(201).json(newGameRoom);
    } catch (error) {
      res.status(500).json({ error: "Failed to create game room." });
    }
  }

  // Update an existing game room by ID
  public static async updateGameRoom(req: Request, res: Response) {
    try {
      const { game_room_id } = req.params;

      const [updatedRowsCount, updatedRows] = await GameRoomModel.update(
        req.body,
        { where: { game_room_id }, returning: true }
      );

      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: "Game room not found." });
      }

      res.status(200).json(updatedRows[0]);
    } catch (error) {
      res.status(500).json({ error: "Failed to update game room." });
    }
  }

  // Delete a game room by ID
  public static async deleteGameRoom(req: Request, res: Response) {
    try {
      const { game_room_id } = req.params;

      const deletedCount = await GameRoomModel.destroy({
        where: { game_room_id },
      });

      if (deletedCount === 0) {
        return res.status(404).json({ error: "Game room not found." });
      }

      res.status(200).json({ message: "Game room deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete game room." });
    }
  }

  // Get all game rooms
  public static async getAllGameRooms(req: Request, res: Response) {
    try {
      const gameRooms = await GameRoomModel.findAll();
      res.status(200).json({ gameRooms });
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve game rooms." });
    }
  }
}

export default GameRoomController;
