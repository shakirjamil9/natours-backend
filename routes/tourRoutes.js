const express = require('express');

const router = express.Router();

const {
  getAllTours,
  createTour,
  getSingleTour,
  updateTour,
  deleteTour,
  aliasingTours,
  getTourStats,
  getMonthlyPlan,
  dataRestore,
} = require('../controllers/tourController');
const authController = require('../controllers/authController');

router.route('/restore').get(dataRestore);

router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/tour-stats').get(getTourStats);

router.route('/top-5-cheap').get(aliasingTours, getAllTours);

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour);

module.exports = router;
