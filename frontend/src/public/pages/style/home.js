import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  categories: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
