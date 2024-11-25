import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/databaseConnection";

class PlayerPlayerHistoryModel extends Model {
  public player_id!: bigint;
  public player_history_id!: bigint;
}

PlayerPlayerHistoryModel.init(
  {
    player_player_history_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true, 
      },
    player_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "player",
        key: "player_id",
      },
      onDelete: "CASCADE",
    },
    player_history_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "player_history",
        key: "player_history_id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "player_player_history",
    timestamps: true,
  }
);

export default PlayerPlayerHistoryModel;
