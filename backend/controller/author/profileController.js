const Profile = require('../../models/Profile');
const User = require('../../models/User');
const bcrypt = require('bcrypt');

const defaultProfilePicUrl = (req) =>
  `http://${req.get('host')}/images/default.png`;

const controller = {};

controller.getProfile = async (req, res) => {
  const { _id } = req.user;

  try {
    const profile = await Profile.findOne({ user: _id });
    if (!profile) {
      return res.status(404).json({
        error: 'No profile found',
      });
    }

    return res.status(200).json(profile);
  } catch (e) {
    console.log(e); // todo remove on production
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

controller.createProfile = async (req, res) => {
  try {
    const { _id } = req.user;
    const { name, title, bio, website, facebook, twitter, github, profilePic } =
      req.body;

    const profile = await Profile.findOne({ user: _id });
    if (profile) {
      return res.status(400).json({
        error: 'Your Profile is already created!',
      });
    }

    const profileInstance = new Profile({
      name,
      title,
      bio,
      links: {
        website: website ? website : '',
        facebook: facebook ? facebook : '',
        twitter: twitter ? twitter : '',
        github: github ? github : '',
      },
      user: _id,
      profilePic: profilePic ? profilePic : defaultProfilePicUrl,
      posts: [],
      comments: [],
      likedPost: [],
    });

    const profileCreated = await profileInstance.save();
    const user = await User.findByIdAndUpdate(
      _id,
      {
        $set: { profile: profileCreated._id },
      },
      { new: true }
    );

    console.log(user);

    return res.status(201).json(profileCreated);
  } catch (error) {
    console.log(error); // todo remove on production
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};
controller.updateProfile = async (req, res) => {
  try {
    const { _id } = req.user;

    const profile = await Profile.findOne({ user: _id });
    if (!profile) {
      return res.status(400).json({
        error: 'Please create your profile first!',
      });
    }

    const { name, title, bio, website, twitter, facebook, github } = req.body;

    const updateProfileObject = {
      name,
      title,
      bio,
      links: {
        website: website ? website : '',
        twitter: twitter ? twitter : '',
        github: github ? github : '',
        facebook: facebook ? facebook : '',
      },
    };

    const profileUpdated = await Profile.findOneAndUpdate(
      { user: _id },
      {
        $set: updateProfileObject,
      },
      { new: true }
    );

    return res.status(200).json(profileUpdated);
  } catch (error) {
    console.log(error); // todo remove on production
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

controller.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const userPassword = req.user.password;

    const matched = await bcrypt.compare(oldPassword, userPassword);
    if (!matched) {
      return res.status(400).json({
        oldPassword: 'Password is incorrect!',
      });
    }

    const newHash = await bcrypt.hash(newPassword, 11);

    await User.findByIdAndUpdate(req.user._id, {
      $set: { password: newHash },
    });

    return res.status(200).json({
      message: 'Password updated successfully!',
    });
  } catch (error) {
    console.log(error); // todo remove on production
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

module.exports = controller;
