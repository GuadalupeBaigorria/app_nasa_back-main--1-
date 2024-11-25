import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/databaseConnection";

class PlayerActivityModel extends Model {
  public player_activity_id!: bigint;
  public player_id!: bigint;
  public target_player_id!: bigint;
  public game_id!: bigint;
  public activity_id!: bigint;
}

PlayerActivityModel.init(
  {
    player_activity_id: {
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
    },
    target_player_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "player",
        key: "player_id",
      },
    },
  },
  {
    sequelize,
    tableName: "player_activity",
    timestamps: true,
  }
);

export default PlayerActivityModel;
