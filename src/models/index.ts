import { Sequelize } from "sequelize";
import User from "./user_model";

export function initModels(sequelize: Sequelize): Sequelize {
    User.initModel(sequelize);
    return sequelize
}

export { User };