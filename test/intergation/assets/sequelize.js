const { Sequelize } = require('sequelize');

// Remplace ces valeurs par celles de ta base de données
const sequelize = new Sequelize('test', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Passe à true pour voir les requêtes SQL
});

const defineUser = require('./entity/Comment');
const defineComment = require('./entity/User');
const definePost = require('./entity/Post');
const defineGroup = require('./entity/Group');
const defineProfile = require('./entity/Profile');
definePost(sequelize);
defineUser(sequelize);
defineComment(sequelize);
defineGroup(sequelize);
defineProfile(sequelize);

module.exports = sequelize;
