const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Security extends Model { }

Security.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        question1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        question2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        question3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'security',
    }
);

module.exports = Security;