const { DataTypes, Model } = require('sequelize');

function defineProfileModel(sequelize) {
    class Profile extends Model {}

    Profile.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            aboutMe: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            skype: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            language: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Profile',
            tableName: 'Profiles',
            timestamps: false,
        },
    );

    return Profile;
}

module.exports = defineProfileModel;
