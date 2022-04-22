module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('themes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'users',
        //   key: 'theme_id',
        // },
      },
      theme_name: {

        type: Sequelize.TEXT,
      },
      score_id: {

        type: Sequelize.INTEGER,
      },
      question: {

        type: Sequelize.TEXT,
      },
      answer: {

        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('themes');
  },
};
