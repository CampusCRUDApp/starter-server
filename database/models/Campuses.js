const Sequelize = require('sequelize');
const db = require('../db');

const Campuses = db.define("campuses", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: './collegeCampus.jpeg'
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
    }

});

module.exports = Campuses;