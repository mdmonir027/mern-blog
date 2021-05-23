const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      console.log(err); // todo remove later
      console.log(info); // todo remove later
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        message: 'Authentication failed!',
      });
    }

    req.user = user;
    return next();
  })(req, res, next);
};
