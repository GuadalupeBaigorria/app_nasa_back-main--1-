import { Router } from "express";
import PlayerHistoryController from "../../../controllers/games/poseAndRevealControllers/PlayerHistoryController";

const router = Router();

// Route to create a new player history
router.post("/admin/player-history/create", (req, res) => {
  PlayerHistoryController.createPlayerHistory(req, res);
});

// Route to update an existing player history by ID
router.put("/admin/player-history/update/:player_history_id", (req, res) => {
  PlayerHistoryController.updatePlayerHistory(req, res);
});

// Route to delete a player history by ID
router.delete("/admin/player-history/delete/:player_history_id", (req, res) => {
  PlayerHistoryController.deletePlayerHistory(req, res);
});

// Route to get all player histories
router.get("/admin/player-histories", (req, res) => {
  PlayerHistoryController.getAllPlayerHistories(req, res);
});

export default router;
