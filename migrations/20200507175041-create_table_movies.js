'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.createTable("movies", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      poster: {
        type: Sequelize.STRING,
      },
      watched: {
        type: Sequelize.BOOLEAN,
      },
      createAt:Sequelize.DATE,
      updateAt:Sequelize.DATE,
    });   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};
