import { Options, Sequelize } from "sequelize";

const db: Sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: console.log,
} as Options);

// 尝试连接数据库
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

export default db;