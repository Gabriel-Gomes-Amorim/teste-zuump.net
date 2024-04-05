const RopesRepository = require("../repositories/ropes.repository");

class RopesService {
  static async update(id_team_roper, ropesData) {
    try {
      let ropesRecord = await RopesRepository.findByTeamRoper(id_team_roper);

      // Se não houver registro, criar um novo
      if (!ropesRecord) {
        ropesRecord = await RopesRepository.create(id_team_roper, ropesData);
      } else {
        // Se o registro existir, atualizar as cordas
        ropesRecord.ropes = ropesData;
        await ropesRecord.save();
      }

      return ropesRecord;
    } catch (error) {
      throw new Error("Erro ao atualizar registro de cordas: " + error.message);
    }
  }
}

module.exports = RopesService;
