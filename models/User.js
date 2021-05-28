const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class User extends Model {}


User.init(
    {

    //🔑 We want a user model for the many users to many connections relationship
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: false
        }
      },
      userconnections_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'userconnections',
          key: 'id',
          unique: false
        }
      }
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
    
