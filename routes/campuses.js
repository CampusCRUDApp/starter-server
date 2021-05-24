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

/** Add CAMPUSES */
router.post('/', function(req, res, next) {
    Campuses.create(req.body)
        .then(createdCampuses => res.status(200).json(createdCampuses))
        .catch(err => next(err));
});

/** DELETE CAMPUSES */
router.delete('/:id', function(req, res, next) {
    Campuses.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(200).json("Deleted a Campus!"))
        .catch(err => next(err));
});

/******************* EDIT *********************/

router.put('/:id', ash(async(req, res) => {
    await Campuses.update(req.body,
        { where: {id: req.params.id} }
    );
    let Campuses = await Campuses.findByPk(req.params.id);
    res.status(201).json(student);
}));


// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;