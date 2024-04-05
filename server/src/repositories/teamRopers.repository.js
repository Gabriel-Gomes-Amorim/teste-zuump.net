const TeamRoper = require("../models/teamRopers.model");

class TeamRopersRepository {
  static async findAll() {
    try {
      const results = await TeamRoper.sequelize.query(
        `SELECT team_ropers.id AS id_team_roper,
          ropes.ropes,
          JSON_ARRAYAGG(competitors.full_name) AS competitors_names
          FROM team_ropers
          LEFT JOIN competitors
          ON FIND_IN_SET(competitors.id, team_ropers.id_competitors)
          LEFT JOIN ropes
          ON ropes.id_team_roper = team_ropers.id
          WHERE team_ropers.id_rodeo = 1
          GROUP BY team_ropers.id, ropes.ropes`,
        {
          type: TeamRoper.sequelize.QueryTypes.SELECT,
        }
      );
      return results;
    } catch (error) {
      console.error("Error executing SQL query:", error);
      throw new Error("Error executing SQL query");
    }
  }
}

module.exports = TeamRopersRepository;
