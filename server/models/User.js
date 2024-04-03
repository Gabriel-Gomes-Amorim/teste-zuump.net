// MYSQL
const db = require('./db');
// const db2 = require('./db_prod');

// Localhost
const User = db.sequelize.define('competitors', {
    id: {
        type: db.Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    full_name: {
        type: db.Sequelize.STRING(50)
    },
    created_at: {
        type: db.Sequelize.DATE
    },
    updated_at: {
        type: db.Sequelize.DATE
    }
}, { timestamps: false });

// User.sync({force: true});
module.exports = User;