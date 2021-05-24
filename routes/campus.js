const express = require('express');
const router = express.Router();
const { Students, Campus} = require('../database/models');

const ash = require('express-async-handler');
/** GET ALL CAMPUSES */


/** GET CAMPUS BY ID*/
router.get('/:id', ash(async(req, res) => {
    let campus = await Campus.findByPk(req.params.id, {include: [Student]});
    res.status(200).json(campus);
}));

/** Add CAMPUSES */
router.post('/', function(req, res, next) {
    Campus.create(req.body)
        .then(createdCampus => res.status(200).json(createdCampus))
        .catch(err => next(err));
});

/** DELETE CAMPUSES */
router.delete('/:id', function(req, res, next) {
    Campus.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.status(200).json("Deleted a Campus!"))
        .catch(err => next(err));
});

//
router.put('/:id', ash(async(req, res) => {
    await Campus.update(req.body,
        { where: {id: req.params.id} }
    );
    let campus = await Campus.findByPk(req.params.id);
    res.status(201).json(campus);
}));


// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;