import { Sequelize, DataTypes, Model } from "sequelize"

export default class User extends Model {
    declare firstName: string
    declare lastName: string

    static initModel(sequelize: Sequelize) {
        User.init({
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING
            }
        }, {
            sequelize,
            tableName: "users"
        });
    }
}
