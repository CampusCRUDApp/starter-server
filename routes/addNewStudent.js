// const express = require('express');
// const router = express.Router();
// const { Students, Campuses } = require('../database/models');
//
// //so we don't have to use try-catch for each request handler
// const ash = require('express-async-handler');
//
// /** ADD NEW STUDENT */
// router.post('/', function(req, res, next) {
//     Student.create(req.body)
//         .then(createdStudent => res.status(200).json(createdStudent))
//         .catch(err => next(err));
// });
// //
//
// router.put('/:id', ash(async(req, res) => {
//     await Student.update(req.body,
//         { where: {id: req.params.id} }
//     );
//     let student = await Student.findByPk(req.params.id);
//     res.status(201).json(student);
// }));
//
// // Export our router, so that it can be imported to construct our apiRouter;
// module.exports = router;