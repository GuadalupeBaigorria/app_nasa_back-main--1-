import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/databaseConnection";

class GameRoomModel extends Model {
  public game_room_id!: bigint;
  public name!: string;
  public description?: string;
  public creator_id!: bigint;
}

GameRoomModel.init(
  {
    game_room_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.BIGINT,
      references: {
        model: "user", 
        key: "user_id",
      },
    },
  },
  {
    sequelize,
    tableName: "game_room",
    timestamps: true,
  }
);

export default GameRoomModel;