import { Request, Response } from "express";
import InvitationModel from "../../../models/games/poseAndRevealModels/InvitationModel";

class InvitationController {
  // Create a new invitation
  public static async createInvitation(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { inviting_user_id, invited_user_id, game_room_id, status } =
        req.body;
      const newInvitation = await InvitationModel.create({
        inviting_user_id,
        invited_user_id,
        game_room_id,
        status,
        invitation_date: new Date(),
      });
      res.status(201).json(newInvitation);
    } catch (error) {
      res.status(500).json({ error: "Error creating the invitation" });
    }
  }

  // Update an existing invitation by ID
  public static async updateInvitation(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { invitation_id } = req.params;
      const { status } = req.body;
      const invitation = await InvitationModel.findByPk(invitation_id);

      if (invitation) {
        invitation.status = status;
        await invitation.save();
        res.status(200).json(invitation);
      } else {
        res.status(404).json({ message: "Invitation not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error updating the invitation" });
    }
  }

  // Delete an invitation by ID
  public static async deleteInvitation(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { invitation_id } = req.params;
      const deleted = await InvitationModel.destroy({
        where: { invitation_id },
      });

      if (deleted) {
        res.status(200).json({ message: "Invitation deleted successfully" });
      } else {
        res.status(404).json({ message: "Invitation not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error deleting the invitation" });
    }
  }

  // Get all invitations
  public static async getAllInvitations(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const invitations = await InvitationModel.findAll();
      res.status(200).json({ invitations });
    } catch (error) {
      res.status(500).json({ error: "Error fetching invitations" });
    }
  }
}

export default InvitationController;
