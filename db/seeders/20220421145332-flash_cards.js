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
    const questionKino = await fs.readFile(path.join(process.env.PWD, 'db', 'themes', 'kino', 'question.txt'), 'utf-8');
    const arrQuestionKino = questionKino.split('\n').filter((el) => el.length > 1);
    const answerKino = await fs.readFile(path.join(process.env.PWD, 'db', 'themes', 'kino', 'answer.txt'), 'utf-8');
    const arrAnswerKino = answerKino.split('\n').filter((el) => el.length > 1);
    for (let i = 0; i < arrQuestionKino.length; i += 1) {
      await queryInterface.bulkInsert('Theme', [{
        question: arrQuestionKino[i],
        answer: arrAnswerKino[i],
        theme_name: 'Кино',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }

    const questionBrain = await fs.readFile(path.join(process.env.PWD, 'db', 'themes', 'brains', 'question.txt'), 'utf-8');
    const arrQuestionBrain = questionBrain.split('\n').filter((el) => el.length > 1);
    const answerBrain = await fs.readFile(path.join(process.env.PWD, 'db', 'themes', 'brains', 'answer.txt'), 'utf-8');
    const arrAnswerBrain = answerBrain.split('\n').filter((el) => el.length > 1);
    for (let i = 0; i < arrQuestionBrain.length; i += 1) {
      await queryInterface.bulkInsert('Theme', [{
        question: arrQuestionBrain[i],
        answer: arrAnswerBrain[i],
        theme_name: 'Общие Знания',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }

    const questionGameOfThrones = await fs.readFile(path.join(process.env.PWD, 'db', 'themes', 'game of Thrones', 'question.txt'), 'utf-8');
    const arrQuestionGameOfThrones = questionGameOfThrones.split('\n').filter((el) => el.length > 1);
    const answerGameOfThrones = await fs.readFile(path.join(process.env.PWD, 'db', 'themes', 'game of Thrones', 'answer.txt'), 'utf-8');
    const arrAnswerGameOfThrones = answerGameOfThrones.split('\n').filter((el) => el.length > 1);
    for (let i = 0; i < arrQuestionGameOfThrones.length; i += 1) {
      await queryInterface.bulkInsert('Theme', [{
        question: arrQuestionGameOfThrones[i],
        answer: arrAnswerGameOfThrones[i],
        theme_name: 'Игра Престолов',
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
