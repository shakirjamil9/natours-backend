const express = require('express');
const rateLimit = require('express-rate-limit');
const authController = require('../controllers/authController');

const router = express.Router();

const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

router.post('/signup', authController.signup);
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: 'Too many requests. Try again in 15 minutes',
});

router.post('/login', loginLimiter, authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword
);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
