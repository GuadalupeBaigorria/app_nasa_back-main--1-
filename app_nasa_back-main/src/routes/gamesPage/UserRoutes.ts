import { Router } from "express";
import UserController from "../../controllers/gamePage/UserController";

const router = Router();

router.post("/admin/user/create", (req, res) => {
  UserController.createUser(req, res);
});

router.put("/admin/user/update/:user_id", (req, res) => {
  UserController.updateUser(req, res);
});

router.delete("/admin/user/delete/:user_id", (req, res) => {
  UserController.deleteUser(req, res);
});

router.get("/admin/users", (req, res) => {
  UserController.getAllUsers(req, res);
});

export default router;
