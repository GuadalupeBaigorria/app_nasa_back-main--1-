import { DataTypes, Model } from "sequelize";
import sequelize from "../../../config/databaseConnection";

class Content extends Model {
  public title!: string;
  public description?: string; 
  public imageUrl?: string; 
  public player_id!: bigint;
}

Content.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    player_id: {
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
    modelName: "Content",
    timestamps: true,
  }
);

export default Content;
