import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Category from './Category';

const useStyles = makeStyles((theme) => ({
  title: {
    background: '#0e33fd',
    textAlign: 'center',
    color: 'white',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
}));
const Categories = () => {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <Typography className={classes.title} variant='h5'>
          All Categories
        </Typography>
        <CardContent>
          <Category />
        </CardContent>
      </Card>
    </div>
  );
};

export default Categories;
