'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('livros', [
      {
        nome: 'Entendendo Algoritmos',
        autor: 'Aditya Y. Bhargava',
        genero: 'Educação'
      },
      {
        nome: 'Sql - Curso Prático',
        autor: 'Celso Henrique Poderoso de Oliveira ',
        genero: 'Educação'
      },
      {
        nome: 'Aprendendo Javascrpit',
        autor: 'Davi Flanagan',
        genero: 'Educação'
      },
      {
        nome: 'Java Como Programar',
        autor: 'Paul Deitel',
        genero: 'Educação'
      }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};
