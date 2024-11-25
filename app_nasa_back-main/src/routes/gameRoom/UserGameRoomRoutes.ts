import { Router } from "express";
import UserGameRoomController from "../../controllers/gameRoom/UserGameRoomController";

const router = Router();

// Route to create a new user in a game room
router.post("/admin/user-game-room/create", (req, res) => {
  UserGameRoomController.createUserGameRoom(req, res);
});

// Route to update an existing user in a game room by ID
router.put("/admin/user-game-room/update/:id", (req, res) => {
  UserGameRoomController.updateUserGameRoom(req, res);
});

// Route to delete a user in a game room by ID
router.delete("/admin/user-game-room/delete/:id", (req, res) => {
  UserGameRoomController.deleteUserGameRoom(req, res);
});

// Route to get all users in a game room
router.get("/admin/user-game-rooms", (req, res) => {
  UserGameRoomController.getAllUserGameRooms(req, res);
});

export default router;
