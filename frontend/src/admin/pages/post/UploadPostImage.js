import React, { useState } from 'react';
import { connect } from 'react-redux';
import { uploadPostImage } from '../../../store/actions/author/uploadActions';

const UploadPostImage = ({ imageUploadHandler, uploadPostImage }) => {
  const [uploadImage, setUploadImage] = useState(null);
  const uploadImageHandler = (event) => {
    console.log(event.target.files);
    setUploadImage(event.target.files[0]);
    const formData = new FormData();
    formData.append('image', uploadImage);
    uploadPostImage(formData, (url) => {
      imageUploadHandler(url);
    });
  };
  return (
    <div>
      <input type='file' onChange={uploadImageHandler} />
    </div>
  );
};

export default connect(null, { uploadPostImage })(UploadPostImage);
