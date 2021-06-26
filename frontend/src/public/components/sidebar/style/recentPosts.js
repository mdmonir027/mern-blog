import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    background: '#0e33fd',
    textAlign: 'center',
    color: 'white',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    display: 'block',
    cursor: 'Pointer',
    marginBottom: '5px',
  },
}));
export default useStyles;
