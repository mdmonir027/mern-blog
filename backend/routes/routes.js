const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

const routeArrays = [
  {
    path: '/user',
    handler: userRoutes,
  },
  {
    path: '/auth',
    handler: authRoutes,
  },
  {
    path: '/',
    handler: (req, res) => {
      res.status(200).json({
        message: 'Working',
      });
    },
  },
];

module.exports = (app) => {
  routeArrays.forEach((route) => {
    if (route.path === '/') {
      app.get(`${route.path}`, route.handler);
    } else {
      app.use(`/api${route.path}`, route.handler);
    }
  });
};
