const User = require('../../models/User');
const Profile = require('../../models/Profile');
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

controller.updateProfilePicture = async (req, res) => {
  if (req.file) {
    console.log('there is file');
    const oldProfilePic = req.user.profilePic;
    const profilePic = `${req.get('host')}/images/${req.file.filename}`;
    console.log(req.file);

    await User.findByIdAndUpdate(req.user._id, { $set: { profilePic } });

    await Profile.findOneAndUpdate(
      { user: req.user._id },
      {
        $set: { profilePic },
      }
    );

    req.user.profilePic = profilePic;

    return res.status(200).json({
      profilePic,
    });
  } else {
    console.log('there is no file');

    res.status(500).json({ profilePic: req.user.profilePic });
  }
};

module.exports = controller;
