const Ropes = require("../models/ropes.model");

class RopesRepository {
  static async create(id_team_roper, ropesData) {
    try {
      let ropesRecord = await Ropes.findOne({ where: { id_team_roper } });

      // Se não houver registro, criar um novo
      if (!ropesRecord) {
        ropesRecord = await Ropes.create({
          id_team_roper,
          ropes: ropesData,
        });
      } else {
        // Se o registro existir, atualizar as cordas
        ropesRecord.ropes = ropesData;
        await ropesRecord.save();
      }

      return ropesRecord;
    } catch (error) {
      throw new Error(
        "Erro ao criar/atualizar registro de cordas: " + error.message
      );
    }
  }

  static async findByTeamRoper(id_team_roper) {
    try {
      const ropesRecord = await Ropes.findOne({ where: { id_team_roper } });
      return ropesRecord;
    } catch (error) {
      throw new Error(
        "Erro ao encontrar registro de cordas por id_team_roper: " +
          error.message
      );
    }
  }
}

module.exports = RopesRepository;
