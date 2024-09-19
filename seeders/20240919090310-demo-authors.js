'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Authors', [{
        name: 'Ashley Web',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        name: 'John Leopard',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        name: 'Moose Patrol',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ]) 

  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
