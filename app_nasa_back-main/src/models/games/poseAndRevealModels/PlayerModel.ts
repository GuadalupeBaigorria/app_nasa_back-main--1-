import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/databaseConnection";

class Player extends Model {
  public player_id!: bigint;
  public user_id!: bigint;
  public game_id!: bigint;
  public game_room_id!: bigint;
  public score?: number;
  public status?: string;
  public selected_activity_id?: bigint;
  public result?: string;
}

Player.init(
  {
    player_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "user",
        key: "user_id",
      },
    },
    game_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "game",
        key: "game_id",
      },
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.TEXT,
      defaultValue: "active",
    },
    result: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "player",
    timestamps: true,
  }
);

export default Player;
