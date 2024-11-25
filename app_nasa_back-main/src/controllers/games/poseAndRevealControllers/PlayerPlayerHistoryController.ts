import { Request, Response } from "express";
import PlayerPlayerHistoryModel from "../../../models/games/poseAndRevealModels/PlayerPlayerHistoryModel";

class PlayerPlayerHistoryController {
  public static async createPlayerPlayerHistory(req: Request, res: Response) {
    try {
      const { player_id, player_history_id } = req.body;
      const newHistory = await PlayerPlayerHistoryModel.create({
        player_id,
        player_history_id,
      });
      res.status(201).json(newHistory);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to create player-player history." });
    }
  }

  public static async updatePlayerPlayerHistory(req: Request, res: Response) {
    try {
      const { player_player_history_id } = req.params;
      const updatedHistory = await PlayerPlayerHistoryModel.update(req.body, {
        where: { player_player_history_id },
      });
      res.status(200).json(updatedHistory);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update player-player history." });
    }
  }

  public static async deletePlayerPlayerHistory(req: Request, res: Response) {
    try {
      const { player_player_history_id } = req.params;
      await PlayerPlayerHistoryModel.destroy({
        where: { player_player_history_id },
      });
      res
        .status(200)
        .json({ message: "Player-player history deleted successfully." });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to delete player-player history." });
    }
  }

  public static async getAllPlayerPlayerHistories(req: Request, res: Response) {
    try {
      const histories = await PlayerPlayerHistoryModel.findAll();
      res.status(200).json({ histories });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to retrieve player-player histories." });
    }
  }
}

export default PlayerPlayerHistoryController;
