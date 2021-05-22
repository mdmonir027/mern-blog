const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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
