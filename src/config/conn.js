import { Sequelize } from "sequelize";

const conn = new Sequelize("database_name", "root", "123456789", {
  host: "localhost",
  dialect: "mysql", 
});

export default conn;