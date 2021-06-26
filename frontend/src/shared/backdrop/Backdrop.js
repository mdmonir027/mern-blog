import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import useStyles from './style/backdrop';

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
