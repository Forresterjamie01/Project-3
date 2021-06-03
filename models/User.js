const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class User extends Model {}


User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
              }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            mastering: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                
            },
            mixing: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                
            },
            production: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                
            },     

          },
      
    

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
      }
    );
    
    module.exports = User;
    
