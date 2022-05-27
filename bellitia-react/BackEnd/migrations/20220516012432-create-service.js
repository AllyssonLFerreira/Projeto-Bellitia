'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('est_services', {
      id_service: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      especificacao: Sequelize.STRING,
      duracao: Sequelize.STRING,
      valor: Sequelize.STRING,
      id_establishment: Sequelize.INTEGER
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('est_services');

  }
};
