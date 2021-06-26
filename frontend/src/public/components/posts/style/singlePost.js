import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cardBody: {
    padding: '20px',
    marginTop: ' 20px',
  },
  iconBox: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  header: {
    marginBottom: '5px',
  },
  imageWrapper: {
    width: '100%',
    height: '350px',
    background: 'red',
    marginBottom: '10px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  content: {
    paddingTop: '30px',
    paddingBottom: '30px',
    fontSize: '16px',
  },
});

export default useStyles;
