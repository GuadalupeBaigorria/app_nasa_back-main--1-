import { Request, Response } from "express";
import GameGameRoomModel from "../../models/gameRoom/GameGameRoomModel"; 

class GameGameRoomController {
  public static async createGameGameRoom(req: Request, res: Response) {
    try {
      const { game_room_id, game_id } = req.body;

      const newGameGameRoom = await GameGameRoomModel.create({
        game_room_id,
        game_id,
      });

      res.status(201).json(newGameGameRoom);
    } catch (error) {
      res.status(500).json({ error: "Failed to create game game room entry." });
    }
  }

  public static async updateGameGameRoom(req: Request, res: Response) {
    try {
      const { game_game_room_id } = req.params; 
      const [updatedRowsCount, updatedRows] = await GameGameRoomModel.update(
        req.body,
        {
          where: { game_game_room_id }, 
          returning: true,
        }
      );

      if (updatedRowsCount === 0) {
        return res
          .status(404)
          .json({ error: "Game game room entry not found." });
      }

      res.status(200).json(updatedRows[0]);
    } catch (error) {
      res.status(500).json({ error: "Failed to update game game room entry." });
    }
  }

  public static async deleteGameGameRoom(req: Request, res: Response) {
    try {
      const { game_game_room_id } = req.params; 
      const deletedCount = await GameGameRoomModel.destroy({
        where: { game_game_room_id }, 
      });

      if (deletedCount === 0) {
        return res
          .status(404)
          .json({ error: "Game game room entry not found." });
      }

      res
        .status(200)
        .json({ message: "Game game room entry deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete game game room entry." });
    }
  }

  public static async getAllGameGameRooms(req: Request, res: Response) {
    try {
      const gamesGameRooms = await GameGameRoomModel.findAll(); 
      res.status(200).json({ gamesGameRooms });
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve games in game room." });
    }
  }
}

export default GameGameRoomController;
