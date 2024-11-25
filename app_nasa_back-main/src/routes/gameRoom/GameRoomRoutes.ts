import { Router } from "express";
import GameRoomController from "../../controllers/gameRoom/GameRoomController";

const router = Router();

// Route to create a new game room
router.post("/admin/game-room/create", (req, res) => {
  GameRoomController.createGameRoom(req, res);
});

// Route to update an existing game room by ID
router.put("/admin/game-room/update/:game_room_id", (req, res) => {
  GameRoomController.updateGameRoom(req, res);
});

// Route to delete a game room by ID
router.delete("/admin/game-room/delete/:game_room_id", (req, res) => {
  GameRoomController.deleteGameRoom(req, res);
});

// Route to get all game rooms
router.get("/admin/game-rooms", (req, res) => {
  GameRoomController.getAllGameRooms(req, res);
});

export default router;
