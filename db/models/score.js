const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, User }) {
      Score.hasMany(Theme, { foreignKey: 'theme_id' });
      Score.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Score.init({
    score: {
      type: DataTypes.INTEGER,
    },
    theme_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};
