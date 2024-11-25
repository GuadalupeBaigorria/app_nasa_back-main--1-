import { Request, Response } from "express";
import GameModel from "../../../models/games/poseAndRevealModels/GameModel";

class GameController {
  // Crear un nuevo juego
  public static async createGame(req: Request, res: Response) {
    try {
      const { name, description, max_score, time_limit } = req.body;

      const newGame = await GameModel.create({
        name,
        description,
        max_score,
        time_limit,
      });

      return res.status(201).json({
        message: "Game created successfully",
        game: newGame,
      });
    } catch (error) {
      return res.status(500).json({ message: "Error creating game", error });
    }
  }

  // Actualizar un juego existente
  public static async updateGame(req: Request, res: Response) {
    const { game_id } = req.params;
    try {
      const [updatedRows] = await GameModel.update(req.body, {
        where: { game_id },
      });

      if (updatedRows === 0) {
        return res.status(404).json({ message: "Game not found" });
      }

      return res.status(200).json({ message: "Game updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error updating game", error });
    }
  }

  // Eliminar un juego existente
  public static async deleteGame(req: Request, res: Response) {
    const { game_id } = req.params;
    try {
      const deletedRows = await GameModel.destroy({
        where: { game_id },
      });

      if (deletedRows === 0) {
        return res.status(404).json({ message: "Game not found" });
      }

      return res.status(200).json({ message: "Game deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error deleting game", error });
    }
  }

  // Obtener todos los juegos
  public static async getAllGames(req: Request, res: Response) {
    try {
      const games = await GameModel.findAll();
      return res.status(200).json({ games });
    } catch (error) {
      return res.status(500).json({ message: "Error fetching games", error });
    }
  }
}

export default GameController;
