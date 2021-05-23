const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const profileRoutes = require('./author/profileRoutes');
const categoryRoutes = require('./admin/categoryRoutes');
const postRoutes = require('./author/postRoutes');

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
    path: '/author/profile',
    handler: profileRoutes,
  },
  {
    path: '/author/post',
    handler: postRoutes,
  },
  {
    path: '/admin/category',
    handler: categoryRoutes,
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
      app.use('/api' + route.path, route.handler);
    }
  });
};
