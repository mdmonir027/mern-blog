const Profile = require('../../models/Profile');
const { validationResult } = require('express-validator');
const errorValidationFormatter = require('../../utils/errorValidationFormatter');
const User = require('../../models/User');

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
    const { name, title, bio, website, facebook, twitter, github } = req.body;

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
      posts: [],
      comments: [],
      likedPost: [],
    });

    const profileCreated = await profileInstance.save();
    await User.findByIdAndUpdate(_id, {
      $set: { profile: profileCreated._id },
    });

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

module.exports = controller;
