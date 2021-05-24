const express = require('express');
const router = express.Router();

// Subrouters;
const studentsRouter = require('./students');
const campusesRouter = require('./campuses');
const addCampusRouter = require('./deleteCampus');
const deleteCampusRouter = require('./addNewCampus');

//singular
const campusRouter = require('./campus');
const studentRouter = require('./student');


// Mount our subrouters to assemble our apiRouter;
router.use('/students', studentsRouter);
router.use('/campuses', campusesRouter);

//singular
router.use('/student', studentRouter);
router.use('/campus', campusRouter);

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;