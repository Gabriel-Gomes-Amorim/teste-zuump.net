const RopesService = require("../service/ropes.service");

class RopesController {
  static async update(req, res) {
    try {
      const { id_team_roper, ropesData } = req.body;

      const result = await RopesService.update(id_team_roper, ropesData);

      res.status(200).json({
        success: true,
        message: "Registro de cordas atualizado com sucesso",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao atualizar registro de cordas",
        error: error.message,
      });
    }
  }
}

module.exports = RopesController;
