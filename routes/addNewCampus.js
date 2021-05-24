// const express = require('express');
// const router = express.Router();
// const { Students, Campuses } = require('../database/models');
//
// //so we don't have to use try-catch for each request handler
// const ash = require('express-async-handler');
//
// /** ADD NEW Campus */
// router.post('/', function(req, res, next) {
//     Campuses.create(req.body)
//         .then(createdCampus => res.status(200).json(createdCampus))
//         .catch(err => next(err));
// });
//
// /******************* EDIT *********************/
//
// router.put('/:id', ash(async(req, res) => {
//     await Campuses.update(req.body,
//         { where: {id: req.params.id} }
//     );
//     let campuses = await Campuses.findByPk(req.params.id);
//     res.status(201).json(campuses);
// }));
//
// // Export our router, so that it can be imported to construct our apiRouter;
// module.exports = router;