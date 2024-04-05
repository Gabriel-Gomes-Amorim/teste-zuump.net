const { sequelize, Sequelize } = require("../database/sequelize.config");

const TeamRopers = sequelize.define(
  "team_ropers",
  {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    id_competitors: {
      type: Sequelize.STRING(50),
    },
    id_rodeo: {
      type: Sequelize.INTEGER,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  },
  { timestamps: false }
);

module.exports = TeamRopers;
