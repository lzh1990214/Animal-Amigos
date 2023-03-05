const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Address extends Model { }

Address.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER(5),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        },
    
        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'address',
    }
);

module.exports = Address;
