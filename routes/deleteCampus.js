// const express = require('express');
// const router = express.Router();
// const { Students, Campuses } = require('../database/models');
//
// //so we don't have to use try-catch for each request handler
// const ash = require('express-async-handler');
//
//
// /** DELETE STUDENT */
// router.delete('/:id', function(req, res, next) {
//     Campuses.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(() => res.status(200).json("Deleted a Campus!"))
//         .catch(err => next(err));
// });
//
// /******************* EDIT *********************/
//
// // router.put('/:id', ash(async(req, res) => {
// //     await Campuses.update(req.body,
// //         { where: {id: req.params.id} }
// //     );
// //     let Campuses = await Campuses.findByPk(req.params.id);
// //     res.status(201).json(student);
// // }));
//
// // Export our router, so that it can be imported to construct our apiRouter;
// module.exports = router;