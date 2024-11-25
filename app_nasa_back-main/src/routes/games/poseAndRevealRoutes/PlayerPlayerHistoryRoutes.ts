import { Router } from "express";
import PlayerPlayerHistoryController from "../../../controllers/games/poseAndRevealControllers/PlayerPlayerHistoryController";

const router = Router();

// Route to create a new player-player history
router.post("/admin/player-player-history/create", (req, res) => {
  PlayerPlayerHistoryController.createPlayerPlayerHistory(req, res);
});

// Route to update an existing player-player history by ID
router.put(
  "/admin/player-player-history/update/:player_player_history_id",
  (req, res) => {
    PlayerPlayerHistoryController.updatePlayerPlayerHistory(req, res);
  }
);

// Route to delete a player-player history by ID
router.delete(
  "/admin/player-player-history/delete/:player_player_history_id",
  (req, res) => {
    PlayerPlayerHistoryController.deletePlayerPlayerHistory(req, res);
  }
);

// Route to get all player-player histories
router.get("/admin/player-player-histories", (req, res) => {
  PlayerPlayerHistoryController.getAllPlayerPlayerHistories(req, res);
});

export default router;
