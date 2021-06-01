import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const SimpleBackdrop = ({ enabled }) => {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={enabled}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </div>
  );
};
export default SimpleBackdrop;
