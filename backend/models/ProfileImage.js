const { Schema, model } = require('mongoose');

const profileImageSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: 'Profile',
      required: true,
    },
  },
  { timestamps: true }
);

const profileImageModel = model('ProfileImage', profileImageSchema);

module.exports = profileImageModel;
