import { Router } from "express";
import GameGameRoomController from "../../controllers/gameRoom/GameGameRoomController";

const router = Router();

// Route to create a new game in a game room
router.post("/admin/game-gameroom/create", (req, res) => {
  GameGameRoomController.createGameGameRoom(req, res); 
});

// Route to update an existing game in a game room by ID
router.put("/admin/game-gameroom/update/:game_game_room_id", (req, res) => {
  GameGameRoomController.updateGameGameRoom(req, res); 
});

// Route to delete a game in a game room by ID
router.delete("/admin/game-gameroom/delete/:game_game_room_id", (req, res) => {
  GameGameRoomController.deleteGameGameRoom(req, res); 
});

// Route to get all games in game room
router.get("/admin/game-game-rooms", (req, res) => {
  GameGameRoomController.getAllGameGameRooms(req, res);
});

export default router;
