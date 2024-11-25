import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/databaseConnection";

class InvitationModel extends Model {
  public invitation_id!: bigint;
  public inviting_user_id!: bigint; 
  public invited_user_id!: bigint; 
  public game_room_id!: bigint; 
  public status!: string; 
  public invitation_date!: Date; 
}

InvitationModel.init(
  {
    invitation_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    inviting_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "user",
        key: "user_id",
      },
    },
    invited_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "user",
        key: "user_id",
      },
    },
    game_room_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "game_room",
        key: "game_room_id",
      },
    },
    status: {
      type: DataTypes.TEXT,
      defaultValue: "pending",
    },
    invitation_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "invitation",
    timestamps: true,
  }
);

export default InvitationModel;
