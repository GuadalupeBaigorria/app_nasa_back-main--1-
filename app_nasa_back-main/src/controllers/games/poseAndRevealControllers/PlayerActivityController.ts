import { Request, Response } from "express";
import PlayerActivityModel from "../../../models/games/poseAndRevealModels/PlayerActivityModel";

class PlayerActivityController {
  public static async createPlayerActivity(req: Request, res: Response) {
    try {
      const { player_id, target_player_id, game_id, activity_id } = req.body;
      const newPlayerActivity = await PlayerActivityModel.create({
        player_id,
        target_player_id,
        game_id,
        activity_id,
      });
      res.status(201).json(newPlayerActivity);
    } catch (error) {
      res.status(500).json({ error: "Failed to create player activity." });
    }
  }

  public static async updatePlayerActivity(req: Request, res: Response) {
    try {
      const { player_activity_id } = req.params;
      const updatedPlayerActivity = await PlayerActivityModel.update(req.body, {
        where: { player_activity_id },
      });
      res.status(200).json(updatedPlayerActivity);
    } catch (error) {
      res.status(500).json({ error: "Failed to update player activity." });
    }
  }

  public static async deletePlayerActivity(req: Request, res: Response) {
    try {
      const { player_activity_id } = req.params;
      await PlayerActivityModel.destroy({
        where: { player_activity_id },
      });
      res.status(200).json({ message: "Player activity deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete player activity." });
    }
  }

  public static async getAllPlayerActivities(req: Request, res: Response) {
    try {
      const playerActivities = await PlayerActivityModel.findAll();
      res.status(200).json({ playerActivities });
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve player activities." });
    }
  }
}

export default PlayerActivityController;
