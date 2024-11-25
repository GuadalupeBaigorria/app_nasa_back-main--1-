import { Request, Response } from "express";
import ActivityModel from "../../../models/games/poseAndRevealModels/ActivityModel";

class ActivityController {
  // Crear una nueva actividad
  public static async createActivity(req: Request, res: Response) {
    try {
      const { title, description, image, score, game_id } = req.body;

      const newActivity = await ActivityModel.create({
        title,
        description,
        image,
        score,
        game_id,
      });

      return res.status(201).json({
        message: "Activity created successfully",
        activity: newActivity,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error creating activity", error });
    }
  }

  // Actualizar una actividad existente
  public static async updateActivity(req: Request, res: Response) {
    const { activity_id } = req.params;
    try {
      const [updatedRows] = await ActivityModel.update(req.body, {
        where: { activity_id: activity_id },
      });

      if (updatedRows === 0) {
        return res.status(404).json({ message: "Activity not found" });
      }

      return res.status(200).json({ message: "Activity updated successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error updating activity", error });
    }
  }

  // Eliminar una actividad existente
  public static async deleteActivity(req: Request, res: Response) {
    const { activity_id } = req.params;
    try {
      const deletedRows = await ActivityModel.destroy({
        where: { activity_id: activity_id },
      });

      if (deletedRows === 0) {
        return res.status(404).json({ message: "Activity not found" });
      }

      return res.status(200).json({ message: "Activity deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error deleting activity", error });
    }
  }

  // Obtener todas las actividades
  public static async getAllActivities(req: Request, res: Response) {
    try {
      const activities = await ActivityModel.findAll();
      return res.status(200).json({ activities });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error fetching activities", error });
    }
  }
}

export default ActivityController;
