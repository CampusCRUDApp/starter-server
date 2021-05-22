// register models, set up associations between tables, and generate barrel file for the models;

const Student = require('./student');
const Campus = require('./campus');

const Campuses = require('./campuses');
const Students = require('./students');

Student.belongsTo(Campus);
Campus.hasMany(Student);



Students.belongsTo(Campuses);
Campuses.hasMany(Student);
Campuses.hasMany(Students);

module.exports = {
    Student,
    Campus,
    Campuses,
    Students
};
