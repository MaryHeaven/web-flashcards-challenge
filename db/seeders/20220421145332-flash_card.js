const fs = require('fs').promises;
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const questionWords = await fs.readFile(path.join(process.env.PWD, 'db', 'themas', 'question.txt'), 'utf-8');
    const arrQuestionWord = questionWords.split('\n');
    const answerWords = await fs.readFile(path.join(process.env.PWD, 'db', 'themas', 'answer.txt'), 'utf-8');
    const arrAnswerWord = answerWords.split('\n');
    for (let i = 0; i < arrQuestionWord.length; i += 1) {
      await queryInterface.bulkInsert('themes', [{
        question: arrQuestionWord[i],
        answer: arrAnswerWord[i],
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
