import { Request, Response } from "express";
import PlayerHistoryModel from "../../../models/games/poseAndRevealModels/PlayerHistoryModel";

class PlayerHistoryController {
  public static async createPlayerHistory(req: Request, res: Response) {
    try {
      const { player_id, game_id, score, played_at, result } = req.body;
      const newHistory = await PlayerHistoryModel.create({
        player_id,
        game_id,
        score,
        played_at,
        result,
      });
      res.status(201).json(newHistory);
    } catch (error) {
      res.status(500).json({ error: "Failed to create player history." });
    }
  }

  public static async updatePlayerHistory(req: Request, res: Response) {
    try {
      const { player_history_id } = req.params;
      const updatedHistory = await PlayerHistoryModel.update(req.body, {
        where: { player_history_id },
      });
      res.status(200).json(updatedHistory);
    } catch (error) {
      res.status(500).json({ error: "Failed to update player history." });
    }
  }

  public static async deletePlayerHistory(req: Request, res: Response) {
    try {
      const { player_history_id } = req.params;
      await PlayerHistoryModel.destroy({ where: { player_history_id } });
      res.status(200).json({ message: "Player history deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete player history." });
    }
  }

  public static async getAllPlayerHistories(req: Request, res: Response) {
    try {
      const histories = await PlayerHistoryModel.findAll();
      res.status(200).json({ histories });
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve player histories." });
    }
  }
}

export default PlayerHistoryController;
