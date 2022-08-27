const testTours = [
  {
    id: 0,
    name: 'The Forest Hiker',
    duration: 5,
    maxGroupSize: 25,
    difficulty: 'easy',
    ratingsAverage: 4.7,
    ratingsQuantity: 37,
    price: 397,
    summary: 'Breathtaking hike through the Canadian Banff National Park',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageCover: 'tour-1-cover.jpg',
    images: ['tour-1-1.jpg', 'tour-1-2.jpg', 'tour-1-3.jpg'],
    startDates: ['2021-04-25,10:00', '2021-07-20,10:00', '2021-10-05,10:00'],
  },

  {
    id: 1,
    name: 'The Sea Explorer',
    duration: 7,
    maxGroupSize: 15,
    difficulty: 'medium',
    ratingsAverage: 4.8,
    ratingsQuantity: 23,
    price: 497,
    summary: 'Exploring the jaw-dropping US east coast by foot and by boat',
    description:
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageCover: 'tour-2-cover.jpg',
    images: ['tour-2-1.jpg', 'tour-2-2.jpg', 'tour-2-3.jpg'],
    startDates: ['2021-06-19,10:00', '2021-07-20,10:00', '2021-08-18,10:00'],
  },
];

exports.checkID = (req, res, next, tourId) => {
  if (tourId > testTours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    tours: testTours,
  });
};

exports.createTour = (req, res) => {
  const id = testTours.at(-1).id + 1;
  const newTour = Object.assign({ id }, req.body);
  testTours.push(newTour);
  res.status(201).json({
    status: 'success',
    data: newTour,
  });
};

exports.getSingleTour = (req, res) => {
  const tourId = req.params.id * 1; // multiply converts to number
  const tour = testTours.find((el) => el.id === tourId);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    tour: tour,
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: '<Updated data>',
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
