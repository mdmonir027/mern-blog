module.exports = (req, res, next) => {
  const user = req.user;

  if (!user.isAdmin) {
    return res.status(403).json({
      error: 'Your are not allowed to make this actions',
    });
  }
  return next();
};
