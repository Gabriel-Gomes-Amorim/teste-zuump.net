const { sequelize, Sequelize } = require("../database/sequelize.config");

const Ropes = sequelize.define(
  "ropes",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    id_team_roper: {
      type: Sequelize.INTEGER,
    },
    ropes: {
      type: Sequelize.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    engine: "InnoDB",
  }
);

module.exports = Ropes;
