import { Router } from "express";
import ActivityController from "../../../controllers/games/poseAndRevealControllers/ActivityController";

const router = Router();

// Route to create a new activity
router.post("/admin/activity/create", (req, res) => {
  ActivityController.createActivity(req, res);
});

// Route to update an existing activity by ID
router.put("/admin/activity/update/:activity_id", (req, res) => {
  ActivityController.updateActivity(req, res);
});

// Route to delete an activity by ID
router.delete("/admin/activity/delete/:activity_id", (req, res) => {
  ActivityController.deleteActivity(req, res);
});

// Route to get all activities
router.get("/admin/activities", (req, res) => {
  ActivityController.getAllActivities(req, res);
});

export default router;
