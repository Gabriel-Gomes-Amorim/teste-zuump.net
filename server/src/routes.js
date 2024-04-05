const express = require("express");
const routes = express.Router();
const TeamRopersController = require("./controllers/teamRopers.controller");
const RopesController = require("./controllers/ropes.controller");

//team ropers
routes.get("/team-ropers/list", TeamRopersController.findAll);

//ropes
routes.put("/ropes/update", RopesController.update);

module.exports = routes;
