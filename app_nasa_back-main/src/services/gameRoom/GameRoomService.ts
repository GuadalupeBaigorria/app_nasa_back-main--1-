import GameModel from "../../models/games/poseAndRevealModels/GameModel";
import GameRoomModel from "../../models/gameRoom/GameRoomModel";
import GameGameRoomModel from "../../models/gameRoom/GameGameRoomModel";
class GameRoomService {
  public static async createGameRoom(
    userId: number,
    roomName: string,
    roomDescription?: string
  ): Promise<GameRoomModel> {
    const newRoom = await GameRoomModel.create({
      name: roomName,
      description: roomDescription,
      creator_id: userId,
    });
    return newRoom;
  }

  public static async getGamesInRoom(roomId: number): Promise<GameModel[]> {
    const games = await GameModel.findAll({
      include: [
        {
          model: GameRoomModel,
          where: { game_room_id: roomId }, 
        },
      ],
    });
    return games;
  }
}

export default GameRoomService;
