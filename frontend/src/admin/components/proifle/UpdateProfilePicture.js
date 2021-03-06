import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfilePicture } from '../../../store/actions/author/uploadActions';
import useStyles from './style/update';

const UpdatedProfilePicture = ({ updateProfilePicture, profilePic }) => {
  const classes = useStyles();

  const [uploadImage, setUploadImage] = useState(null);

  const uploadImageHandler = (event) => {
    setUploadImage(event.target.files[0]);
    const formData = new FormData();
    formData.append('profilePicture', uploadImage);
    updateProfilePicture(formData);
  };

  return (
    <div>
      <div className={classes.imagArea}>
        <div className={classes.imageWrapper}>
          <img
            src={'http://' + profilePic}
            alt='profile'
            className={classes.profileImage}
          />
        </div>

        <Button
          variant='contained'
          color='primary'
          className={`text-center ${classes.uploadImageButton}`}
        >
          <label className={classes.inputLabel} htmlFor='profilePictureInput'>
            Upload Image
          </label>
          <input
            type='file'
            name='file'
            id='profilePictureInput'
            className={classes.inputProfile}
            onChange={uploadImageHandler}
          />
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profilePic: state.author.profile.profile.profilePic,
});

export default connect(mapStateToProps, { updateProfilePicture })(
  UpdatedProfilePicture
);
