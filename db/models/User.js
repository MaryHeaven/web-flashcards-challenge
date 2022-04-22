const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Theme, Score) {
      User.belongsToMany(Theme, { through: Score, foreignKey: 'user_id' });
    }
  }
  User.init({
    user_name: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
