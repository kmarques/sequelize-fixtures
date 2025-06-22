const { DataTypes, Model } = require('sequelize');

function defineCommentModel(sequelize) {
  class Comment extends Model {}

  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: { model: 'Posts', key: 'id' },
      },
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'Comments',
      timestamps: false,
    },
  );

  return Comment;
}

module.exports = defineCommentModel;
