import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useMemo } from 'react';
import { connect, useSelector } from 'react-redux';
import ProgressBar from '../../../../shared/components/progressBar';
import { setAllCategories } from '../../../../store/actions/categoryActions';
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
const Categories = ({ setAllCategories }) => {
  const classes = useStyles();
  const category = useSelector((state) => state.category);
  const categories = useMemo(() => category.categories, [category.categories]);
  useEffect(() => setAllCategories(), [setAllCategories]);

  return (
    <div>
      <Card>
        {category.loading && <ProgressBar />}
        <Typography className={classes.title} variant='h5'>
          All Categories
        </Typography>
        <CardContent>
          {!category.loading &&
            categories?.map((category) => (
              <Category
                name={category.name}
                key={category._id}
                id={category._id}
              />
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default connect(null, { setAllCategories })(Categories);
