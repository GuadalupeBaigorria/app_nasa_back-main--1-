import { Request, Response } from "express";
import Player from "../../../models/games/poseAndRevealModels/PlayerModel";

class PlayerController {
  public static async createPlayer(req: Request, res: Response) {
    try {
      const {
        user_id,
        game_id,
        game_room_id,
        score,
        status,
        selected_activity_id,
        result,
      } = req.body;
      const newPlayer = await Player.create({
        user_id,
        game_id,
        game_room_id,
        score,
        status,
        selected_activity_id,
        result,
      });
      res.status(201).json(newPlayer);
    } catch (error) {
      res.status(500).json({ error: "Failed to create player." });
    }
  }

  public static async updatePlayer(req: Request, res: Response) {
    try {
      const { player_id } = req.params;
      const updatedPlayer = await Player.update(req.body, {
        where: { player_id },
      });
      res.status(200).json(updatedPlayer);
    } catch (error) {
      res.status(500).json({ error: "Failed to update player." });
    }
  }

  public static async deletePlayer(req: Request, res: Response) {
    try {
      const { player_id } = req.params;
      await Player.destroy({ where: { player_id } });
      res.status(200).json({ message: "Player deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete player." });
    }
  }

  public static async getAllPlayers(req: Request, res: Response) {
    try {
      const players = await Player.findAll();
      res.status(200).json({ players });
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve players." });
    }
  }
}

export default PlayerController;
