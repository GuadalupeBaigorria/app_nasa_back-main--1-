import GameModel from "../../../models/games/poseAndRevealModels/GameModel";
import Player from "../../../models/games/poseAndRevealModels/PlayerModel";
import ActivityModel from "../../../models/games/poseAndRevealModels/ActivityModel";

class GameService {
  public static async resetGame(gameId: bigint): Promise<void> {
    const players = await Player.findAll({ where: { game_id: gameId } });
    if (!players.length) {
      throw new Error("No players found for the game");
    }

    // Restablece el puntaje de todos los jugadores a cero
    await Promise.all(
      players.map(async (player) => {
        player.score = 0;
        await player.save();
      })
    );

    // Opcional: Puedes reiniciar otros aspectos del juego, si es necesario
    const game = await GameModel.findByPk(gameId);
    if (game) {
      game.current_state = "started"; // o cualquier otro estado que desees establecer
      await game.save();
    }
  }

  public static async updatePlayerScore(
    playerId: bigint,
    activityId: bigint
  ): Promise<{ player: Player; winner: boolean }> {
    const player = await Player.findByPk(playerId);
    if (!player) {
      throw new Error("Player not found");
    }

    // Obtiene la actividad asociada
    const activity = await ActivityModel.findByPk(activityId);
    if (!activity) {
      throw new Error("Activity not found");
    }

    // Suma el puntaje de la actividad al puntaje del jugador
    player.score = (player.score || 0) + (activity.score || 0);
    await player.save();

    // Verifica si el jugador ha ganado
    const winner = await GameService.checkWinner(player.game_id);

    return { player, winner };
  }

  public static async checkWinner(gameId: bigint): Promise<boolean> {
    const players = await Player.findAll({ where: { game_id: gameId } });
    const game = await GameModel.findByPk(gameId);
    if (!game) {
      throw new Error("Game not found");
    }

    const maxScore = game.max_score;

    return players.some((player) => (player.score ?? 0) >= (maxScore ?? 0));
  }
}

export default GameService;
