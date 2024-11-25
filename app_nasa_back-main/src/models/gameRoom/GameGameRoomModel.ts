import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/databaseConnection";

class GameGameRoomModel extends Model {
  public game_game_room_id!: bigint;
  public game_room_id!: bigint;
  public game_id!: bigint;
}

GameGameRoomModel.init(
  {
    game_game_room_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    game_room_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "game_room",
        key: "game_room_id",
      },
      onDelete: "CASCADE",
    },
    game_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "game",
        key: "game_id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "game_game_room",
    timestamps: true,
  }
);

export default GameGameRoomModel;
