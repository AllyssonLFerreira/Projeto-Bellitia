'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('schedules', {
      id_schedules: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      data: Sequelize.DATE,
      servico: Sequelize.INTEGER,
      profissional: Sequelize.INTEGER,
      estabelecimento: Sequelize.INTEGER,
      nome: Sequelize.INTEGER,
      horario: Sequelize.TIME
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('schedules');

  }
};
