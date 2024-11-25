import { Router } from "express";
import ContentController from "../../../controllers/games/poseAndRevealControllers/ContentController";

const router = Router();

// Route to create a new content
router.post("/admin/content/create", (req, res) => {
  ContentController.createContent(req, res);
});

// Route to update content by content_id
router.put("/admin/content/update/:content_id", (req, res) => {
  ContentController.updateContent(req, res);
});

// Route to delete content by content_id
router.delete("/admin/content/delete/:content_id", (req, res) => {
  ContentController.deleteContent(req, res);
});

// Route to get all contents
router.get("/admin/contents", (req, res) => {
  ContentController.getAllContents(req, res);
});

export default router;
