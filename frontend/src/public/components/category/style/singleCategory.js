import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: 345,
    padding: '7px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
  postLink: {
    textDecoration: 'none',
    color: '#000',
  },
  postsWrapper: {
    background: '#F5F5F5',
  },
}));

export default useStyles;
