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
          Name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
              }
            },
            Password: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            Location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Mastering: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                
            },
            Mixing: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                
            },
            Production: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                
            },     

          },
      
    

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
    );
    
    module.exports = User;
    
