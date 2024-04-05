const TeamRoper = require("../models/teamRopers.model");
const TeamRopersService = require("../service/teamRopers.service");

class TeamRopersController {
  static async findAll(req, res) {
    try {
      const results = await TeamRopersService.findAll();
      res.send(results);
    } catch (error) {
      console.error("Error in TeamRopersController.findAll:", error);
      res.status(500).send("Error executing SQL query");
    }
  }
}

module.exports = TeamRopersController;
