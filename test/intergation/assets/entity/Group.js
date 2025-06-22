const { DataTypes, Model } = require('sequelize');

function defineGroupModel(sequelize) {
    class Group extends Model {}

    Group.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            ownerId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: { model: 'Users', key: 'id' },
            },
        },
        {
            sequelize,
            modelName: 'Group',
            tableName: 'Groups',
            timestamps: false,
        },
    );

    return Group;
}

module.exports = defineGroupModel;
