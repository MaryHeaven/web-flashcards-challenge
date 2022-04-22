const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(User, Score) {
      Theme.belongsToMany(User, { through: Score, foreignKey: 'theme_id' });
    }
  }
  Theme.init({
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
    modelName: 'Theme',
  });
  return Theme;
};
