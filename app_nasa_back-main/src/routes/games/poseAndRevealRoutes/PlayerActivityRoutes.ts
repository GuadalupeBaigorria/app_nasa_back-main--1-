import { Router } from "express";
import PlayerActivityController from "../../../controllers/games/poseAndRevealControllers/PlayerActivityController";

const router = Router();

// Route to create a new player activity
router.post("/admin/player-activity/create", (req, res) => {
  PlayerActivityController.createPlayerActivity(req, res);
});

// Route to update an existing player activity by ID
router.put("/admin/player-activity/update/:player_activity_id", (req, res) => {
  PlayerActivityController.updatePlayerActivity(req, res);
});

// Route to delete a player activity by ID
router.delete(
  "/admin/player-activity/delete/:player_activity_id",
  (req, res) => {
    PlayerActivityController.deletePlayerActivity(req, res);
  }
);

// Route to get all player activities
router.get("/admin/player-activities", (req, res) => {
  PlayerActivityController.getAllPlayerActivities(req, res);
});

export default router;
