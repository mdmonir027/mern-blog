const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePic: {
      type: String,
      default: 'profile.jpg',
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: 'Profile',
    },
  },
  { timestamps: true }
);

const User = model('User', userSchema);

module.exports = User;
