const express = require('express');

const router = express.Router();

const {
  getAllTours,
  createTour,
  getSingleTour,
  updateTour,
  deleteTour,
  // checkID,
  // checkBody,
  aliasingTours,
} = require('../controllers/tourController');

// router.param('id', checkID);

router.route('/top-5-cheap').get(aliasingTours, getAllTours);

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour);

module.exports = router;
