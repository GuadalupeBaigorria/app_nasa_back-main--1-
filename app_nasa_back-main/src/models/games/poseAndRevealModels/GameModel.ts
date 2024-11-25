import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/databaseConnection";

class GameModel extends Model {
  public game_id!: bigint;
  public name!: string;
  public description?: string;
  public max_score?: number;
  public time_limit?: string;
  public current_state!: string; 
}

GameModel.init(
  {
    game_id: {
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
    max_score: {
      type: DataTypes.INTEGER,
    },
    current_state: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "waiting",
    },
    time_limit: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "game",
    timestamps: true,
  }
);

export default GameModel;