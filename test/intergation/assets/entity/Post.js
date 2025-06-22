const { DataTypes, Model } = require('sequelize');

function definePostModel(sequelize) {
    class Post extends Model {}

    Post.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
        },
        {
            sequelize,
            modelName: 'Post',
            tableName: 'Posts',
            timestamps: false,
        },
    );

    return Post;
}

module.exports = definePostModel;
