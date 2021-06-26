import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '20px',
  },
  avatar: {
    backgroundColor: red[500],
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  iconWrapper: {
    // flexBasis: '50%',
  },
  link: {
    color: 'black',
    display: 'inline-block',
    textDecoration: 'none',
  },
}));

export default useStyles;
