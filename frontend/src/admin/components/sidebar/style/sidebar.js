import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    flexBasis: '100%',
    color: 'inherit',
  },
  logoutButton: {
    cursor: 'pointer',
  },
  smDisplayNone: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  xsDisplayNone: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));
export default useStyles;
