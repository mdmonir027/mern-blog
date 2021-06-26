import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
    },
  },
  menuItemLink: {
    all: 'inherit',
    background: 'none',
    width: '100%',
    color: 'inherit',
  },
}));
export default useStyles;
