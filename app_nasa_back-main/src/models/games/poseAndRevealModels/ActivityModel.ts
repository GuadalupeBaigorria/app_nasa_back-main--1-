import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/databaseConnection";

class ActivityModel extends Model {
  public activity_id!: bigint;
  public title!: string;
  public description?: string;
  public image?: Buffer;
  public score?: number;
  public game_id!: bigint;
}

ActivityModel.init(
  {
    activity_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.BLOB,
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    game_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "game",
        key: "game_id",
      },
    },
  },
  {
    sequelize,
    tableName: "activity",
    timestamps: true,
  }
);

export default ActivityModel;
