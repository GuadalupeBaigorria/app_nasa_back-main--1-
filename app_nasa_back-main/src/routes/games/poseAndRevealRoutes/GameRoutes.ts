import { Router } from "express";
import GameController from "../../../controllers/games/poseAndRevealControllers/GameController";

const router = Router();

// Route to create a new game
router.post("/admin/game/create", (req, res) => {
  GameController.createGame(req, res);
});

// Route to update an existing game by ID
router.put("/admin/game/update/:game_id", (req, res) => {
  GameController.updateGame(req, res);
});

// Route to delete a game by ID
router.delete("/admin/game/delete/:game_id", (req, res) => {
  GameController.deleteGame(req, res);
});

// Route to retrieve all games
router.get("/admin/games", (req, res) => {
  GameController.getAllGames(req, res);
});

export default router;
