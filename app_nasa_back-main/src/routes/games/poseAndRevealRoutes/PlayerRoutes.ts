import { Router } from "express";
import PlayerController from "../../../controllers/games/poseAndRevealControllers/PlayerController";

const router = Router();

// Route to create a new player
router.post("/admin/player/create", (req, res) => {
  PlayerController.createPlayer(req, res);
});

// Route to update an existing player by ID
router.put("/admin/player/update/:player_id", (req, res) => {
  PlayerController.updatePlayer(req, res);
});

// Route to delete a player by ID
router.delete("/admin/player/delete/:player_id", (req, res) => {
  PlayerController.deletePlayer(req, res);
});

// Route to get all players
router.get("/admin/players", (req, res) => {
  PlayerController.getAllPlayers(req, res);
});

export default router;
