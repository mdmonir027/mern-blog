const User = require('../../models/User');
const fs = require('fs');

const controller = {};

controller.uploadProfilePicture = async (req, res) => {
  if (req.file) {
    const oldProfilePic = req.user.profilePic;
    const profilePic = `${req.get('host')}/images/${req.file.filename}`;

    await User.findByIdAndUpdate(req.user._id, { $set: { profilePic } });

    if (oldProfilePic !== `${req.get('host')}/images/default.png`) {
      fs.unlink(`public/images/${oldProfilePic}`, (err) => {
        // if (err) console.log(err); // todo remove later
      });
    }

    return res.status(200).json({
      profilePic,
    });
  } else {
    res.status(200).json({ profilePic: req.user.profilePic });
  }
};

module.exports = controller;
