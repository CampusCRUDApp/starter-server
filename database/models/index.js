// register models, set up associations between tables, and generate barrel file for the models;

const Student = require('./student');
const Campus = require('./campus');
//multiple
const Campuses = require('./campuses');
const Students = require('./students');


Student.belongsTo(Campus);
Students.belongsTo(Campus);

Campus.hasMany(Students);
Campuses.hasMany(Students);

module.exports = {
  Student,
  Campus,
  Students,
  Campuses
};