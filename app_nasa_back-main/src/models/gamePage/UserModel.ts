import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/databaseConnection";

class UserModel extends Model {
  public user_id!: bigint;
  public username!: string;
  public email!: string;
  public password_hash!: string;
  public last_login?: Date;
}

UserModel.init(
  {
    user_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    last_login: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: "user", 
    timestamps: true,
  }
);

export default UserModel;
