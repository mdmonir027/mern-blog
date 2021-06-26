import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeader: {
    background: '#F0F0F7',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  link: {
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    color: '#3f51b5',
    float: 'right',
  },
});
export default useStyles;
