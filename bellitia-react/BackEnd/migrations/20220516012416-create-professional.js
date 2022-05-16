'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('est_professionals', {
      id_professional: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nome: Sequelize.STRING,
      Telefone: Sequelize.STRING,
      Email: Sequelize.STRING,
      Especialidade: Sequelize.STRING,
      fk_establishment: Sequelize.INTEGER
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('est_professionals');

  }
};
