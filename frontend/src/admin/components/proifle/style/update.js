import { makeStyles } from '@material-ui/core';

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

export default useStyles;
