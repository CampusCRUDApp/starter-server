const express = require('express');
const router = express.Router();
const { Students, Campuses} = require('../database/models');

const ash = require('express-async-handler');
/** GET ALL CAMPUSES */


/** GET CAMPUS BY ID*/
router.get('/:id', ash(async(req, res) => {
    let campus = await Campus.findByPk(req.params.id, {include: [Student]});
    res.status(200).json(campus);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;