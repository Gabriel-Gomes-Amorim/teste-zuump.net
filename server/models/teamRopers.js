// MYSQL
const db = require('./db');
// const db2 = require('./db_prod');

// Localhost
const teamRopers = db.sequelize.define('team_ropers', {
    id: {
        type: db.Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_competitors: {
        type: db.Sequelize.STRING(50)
    },
    id_rodeo: {
        type: db.Sequelize.INTEGER
    },
    created_at: {
        type: db.Sequelize.DATE
    },
    updated_at: {
        type: db.Sequelize.DATE
    }
}, { timestamps: false });

// User.sync({force: true});
module.exports = teamRopers;