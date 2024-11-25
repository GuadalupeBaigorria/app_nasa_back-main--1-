import { Sequelize } from "sequelize";

const sequelize = new Sequelize("appnasadb", "root", "441229043&XG", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;