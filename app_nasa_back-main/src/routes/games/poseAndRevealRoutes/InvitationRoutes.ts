import { Router } from "express";
import InvitationController from "../../../controllers/games/poseAndRevealControllers/InvitationController";

const router = Router();

// Route to create a new invitation
router.post("/admin/invitation/create", (req, res) => {
  InvitationController.createInvitation(req, res);
});

// Route to update an existing invitation by ID
router.put("/admin/invitation/update/:invitation_id", (req, res) => {
  InvitationController.updateInvitation(req, res);
});

// Route to delete an invitation by ID
router.delete("/admin/invitation/delete/:invitation_id", (req, res) => {
  InvitationController.deleteInvitation(req, res);
});

// Route to get all invitations
router.get("/admin/invitations", (req, res) => {
  InvitationController.getAllInvitations(req, res);
});

export default router;
