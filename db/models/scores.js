const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class scores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  scores.init({
    score: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    theme_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'themes',
      //   key: 'id',
      // },
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'scores',
  });
  return scores;
};
