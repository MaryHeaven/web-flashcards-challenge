const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class themes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(users, scores) {
      themes.belongsToMany(users, { through: scores, foreignKey: 'theme_id' });
    }
  }
  themes.init({
    theme_name: {

      type: DataTypes.TEXT,
    },
    score_id: {

      type: DataTypes.INTEGER,
    },
    question: {

      type: DataTypes.TEXT,
    },
    answer: {

      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'themes',
  });
  return themes;
};
