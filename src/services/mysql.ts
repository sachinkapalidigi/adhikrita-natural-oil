import { Sequelize } from "sequelize";

const MYSQL_URI = process.env.MYSQL_URI || "";

const sequelize = new Sequelize(MYSQL_URI);

// const sequelize = new Sequelize("database", "username", "password", {
//   host: "localhost",
//   dialect: "mysql",
// });
export default sequelize;
