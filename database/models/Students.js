const Sequelize = require('sequelize');
const db = require('../db');

const Students = db.define("students", {

    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: './'
    },
    gpa: {
        type: Sequelize.STRING,
        validate: {
            isDecimal: true,
            min:0.0,
            max:4.0
        }
    }}

);

module.exports = Students;