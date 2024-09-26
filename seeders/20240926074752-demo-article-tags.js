'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('ArticleTags', [
        {
          articleId: 14,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert('ArticleTags', [
        {
          articleId: 14,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert('ArticleTags', [
        {
          articleId: 15,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert('ArticleTags', [
        {
          articleId: 15,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert('ArticleTags', [
        {
          articleId: 16,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert('ArticleTags', [
        {
          articleId: 16,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ArticleTags', null, {});
  },
};

