import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { uploadProfilePicture } from '../../../store/actions/author/uploadActions';
const useStyles = makeStyles((theme) => ({
  imagArea: {},
  imageWrapper: {},
  profileImage: {
    height: 320,
    width: '100%',
  },
  uploadImageButton: {
    width: '100%',
  },
  inputLabel: {
    width: '100%',
    cursor: 'pointer',
  },
  inputProfile: {
    display: 'none',
  },
}));

const UploadProfilePicture = ({ uploadProfilePicture, setProfilePic }) => {
  const classes = useStyles();

  const [uploadImage, setUploadImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const uploadImageHandler = (event) => {
    console.log('image upload change handler');
    setUploadImage(event.target.files[0]);
    const formData = new FormData();
    formData.append('profilePicture', uploadImage);
    uploadProfilePicture(formData, (url) => {
      setImageUrl(url);
      setProfilePic(url);
    });
  };

  return (
    <div>
      <div className={classes.imagArea}>
        <div className={classes.imageWrapper}>
          {imageUrl ? (
            <img
              src={'http://' + imageUrl}
              alt='profile'
              className={classes.profileImage}
            />
          ) : (
            <img
              src='http://localhost:9000/images/default.png'
              alt='profile'
              className={classes.profileImage}
            />
          )}
        </div>

        <Button
          variant='contained'
          color='primary'
          className={`text-center ${classes.uploadImageButton}`}
        >
          <label className={classes.inputLabel} for='profilePictureInput'>
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
});

export default connect(mapStateToProps, { uploadProfilePicture })(
  UploadProfilePicture
);
