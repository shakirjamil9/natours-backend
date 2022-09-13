const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'Route not specified',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'Route not specified',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'Route not specified',
  });
};
exports.createUser = catchAsync(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    user,
  });
});
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'Route not specified',
  });
};
