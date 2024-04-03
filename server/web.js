const express = require('express');
const app = express();
const cors = require('cors');
const db  = require('./models/db');
const User = require('./models/User');
// const teamRopers = require('./models/teamRopers');
// const User = UserTest.User;
// const { QueryTypes } = require('sequelize');
// const hp = require('./helper');

app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost',
        'http://rodeiodigital.test',
        'http://rodeiodigital.example',
        'http://rodeiodigital.com', 'https://rodeiodigital.com'
    ],
    // origin: [baseUrl],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.get('/list', (req, res) => {
    /*
    teamRopers.findAll({
        raw: true
    })
    */
    db.sequelize.query(
        `SELECT team_ropers.id AS id_team_roper,
        ropes.ropes,
        JSON_ARRAYAGG(competitors.full_name) AS competitors_names
        FROM team_ropers
        LEFT JOIN competitors
        ON FIND_IN_SET(competitors.id, team_ropers.id_competitors)
        LEFT JOIN ropes
        ON ropes.id_team_roper = team_ropers.id
        WHERE team_ropers.id_rodeo = 1
        GROUP BY team_ropers.id, ropes.ropes`, { type: db.sequelize.QueryTypes.SELECT }
    )
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send('Error: ' + err);
    });
});

module.exports = app;