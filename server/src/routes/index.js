const express = require('express');
const router = express.Router();

const summaryRoute = require('./summary.route');

const createdRoutes = [
  {
    path: '/summary',
    route: summaryRoute
  }
];

//passing each path to router
createdRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
