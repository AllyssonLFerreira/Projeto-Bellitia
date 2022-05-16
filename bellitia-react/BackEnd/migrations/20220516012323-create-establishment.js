'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('establishments', {
      id_establishment: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      razao_social: Sequelize.STRING,
      nome_fantasia: Sequelize.STRING,
      cnpj: Sequelize.STRING,
      telefone: Sequelize.STRING,
      email: Sequelize.STRING,
      nome_proprietario: Sequelize.STRING,
      cpf_proprietario: Sequelize.STRING,
      email_proprietario: Sequelize.STRING,
      telefone_proprietario: Sequelize.STRING,
      senha: Sequelize.STRING
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('establishments');

  }
};
