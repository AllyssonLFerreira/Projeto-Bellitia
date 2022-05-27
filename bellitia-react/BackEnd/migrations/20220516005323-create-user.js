'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: Sequelize.STRING,
      cpf: Sequelize.STRING,
      nascimento: Sequelize.DATE,
      telefone: Sequelize.STRING,
      email: Sequelize.STRING,
      senha: Sequelize.STRING
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
