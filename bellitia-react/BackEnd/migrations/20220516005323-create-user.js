'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nome: Sequelize.STRING,
      CPF: Sequelize.STRING,
      RG: Sequelize.STRING,
      D_Nascimento: Sequelize.DATE,
      Telefone: Sequelize.STRING,
      Email: Sequelize.STRING,
      senha: Sequelize.STRING
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
