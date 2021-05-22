const express = require('express');
const router = express.Router();
const { Students, Campuses } = require('../database/models');

const ash = require('express-async-handler');

/** GET ALL CAMPUSES */

router.get('/', ash(async(req, res) => {
  let campuses = await Campuses.findAll({include: [Students]});
  res.status(200).json(campuses);
}));

/** GET CAMPUS BY ID*/
router.get('/:id', ash(async(req, res) => {
  let campus = await Campuses.findByPk(req.params.id, {include: [Students]});
  res.status(200).json(campus);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;