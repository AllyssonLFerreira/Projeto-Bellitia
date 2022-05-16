'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('address', {
      id_endereco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cidade: Sequelize.STRING,
      uf: Sequelize.STRING,
      bairro: Sequelize.STRING,
      logradouro: Sequelize.STRING,
      numero: Sequelize.STRING,
      complemento: Sequelize.STRING,
      cep: Sequelize.STRING,
      fk_est_address: Sequelize.INTEGER
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('address');
  }
};
