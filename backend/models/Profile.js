const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
    maxlength: 100,
  },
  bio: {
    type: String,
    trim: true,
    required: true,
    maxlength: 500,
  },
  profilePic: String,
  links: {
    website: String,
    facebook: String,
    twitter: String,
    github: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  likedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
