const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(themes, scores) {
      users.belongsToMany(themes, { through: scores, foreignKey: 'user_id' });
    }
  }
  users.init({
    user_name: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
