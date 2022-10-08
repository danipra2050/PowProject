import { Sequelize } from "sequelize";

const dbConn = new Sequelize('pow_project', 'pow_user', 'pow123', {
    host: "localhost", dialect: "mysql"
});

export default dbConn;