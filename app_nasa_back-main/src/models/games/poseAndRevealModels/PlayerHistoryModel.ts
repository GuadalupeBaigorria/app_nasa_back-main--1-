import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/databaseConnection";

class PlayerHistoryModel extends Model {
  public player_history_id!: bigint;
  public player_id!: bigint;
  public game_id!: bigint;
  public score?: number;
  public played_at!: Date;
  public result?: string;
}

PlayerHistoryModel.init(
  {
    player_history_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
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
    },
    played_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    result: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "player_history",
    timestamps: true,
  }
);

export default PlayerHistoryModel;
