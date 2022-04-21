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
    static associate(models) {
      // define association here
    }
  }
  themes.init({
    theme_name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    score_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'themes',
  });
  return themes;
};
