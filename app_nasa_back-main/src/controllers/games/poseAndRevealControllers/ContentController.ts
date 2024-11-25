import { Request, Response } from "express";
import ContentModel from "../../../models/games/poseAndRevealModels/ContentModel";

class ContentController {
  // Create new content
  public static async createContent(req: Request, res: Response): Promise<Response> {
    try {
      const { title, description, imageUrl } = req.body;

      const newContent = await ContentModel.create({
        title,
        description,
        imageUrl,
      });

      return res.status(201).json({
        message: "Content created successfully",
        content: newContent,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error creating content",
        error,
      });
    }
  }

  // Update existing content
  public static async updateContent(req: Request, res: Response): Promise<Response> {
    const { content_id } = req.params;
    try {
      const updatedRows = await ContentModel.update(req.body, {
        where: { id: content_id },
      });

      if (updatedRows[0] === 0) {
        return res.status(404).json({
          message: "Content not found",
        });
      }

      return res.status(200).json({
        message: "Content updated successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error updating content",
        error,
      });
    }
  }

  // Delete content
  public static async deleteContent(req: Request, res: Response): Promise<Response> {
    const { content_id } = req.params;
    try {
      const deletedRows = await ContentModel.destroy({
        where: { id: content_id },
      });

      if (deletedRows === 0) {
        return res.status(404).json({
          message: "Content not found",
        });
      }

      return res.status(200).json({
        message: "Content deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error deleting content",
        error,
      });
    }
  }

  // Get all content
  public static async getAllContents(req: Request, res: Response): Promise<Response> {
    try {
      const contents = await ContentModel.findAll();
      return res.status(200).json({ contents });
    } catch (error) {
      return res.status(500).json({
        message: "Error fetching contents",
        error,
      });
    }
  }
}

export default ContentController;
