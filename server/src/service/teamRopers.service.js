const TeamRopersRepository = require("../repositories/teamRopers.repository");

class TeamRopersService {
  static async findAll() {
    try {
      const results = await TeamRopersRepository.findAll();
      return results;
    } catch (error) {
      console.error("Error in TeamRopersService.findAll:", error);
      throw new Error("Error in TeamRopersService.findAll");
    }
  }
}

module.exports = TeamRopersService;
