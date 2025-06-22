
const { DataTypes, Model } = require('sequelize');

function defineUserModel(sequelize) {
  class User extends Model {
    setPassword(value) {
      this.password = value + 'md5';
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'Profiles', key: 'id' },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
      timestamps: false,
    }
  );

  return User;
}

module.exports = defineUserModel;
