import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/databaseConnection";

class UserGameRoomModel extends Model {
  public id!: bigint;
  public user_account_id!: bigint;
  public game_room_id!: bigint;
  public accepted_invitation!: boolean;
}

UserGameRoomModel.init(
  {
    user_game_room_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true, 
    },
    user_id: {
      type: DataTypes.BIGINT,
      references: {
        model: "user",
        key: "user_id",
      },
      allowNull: false, 
      onDelete: "CASCADE",
    },
    game_room_id: {
      type: DataTypes.BIGINT,
      references: {
        model: "game_room",
        key: "game_room_id",
      },
      allowNull: false,
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "user_game_room",  
    timestamps: true,
  }
);

export default UserGameRoomModel; 
