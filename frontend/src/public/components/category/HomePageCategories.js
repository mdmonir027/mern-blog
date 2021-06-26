import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../store/actions/public/categoryActions';
import HomePageSingleCategory from './HomePageSingleCategory';
import useStyles from './style/categories';

const HomePageCategories = ({ categories, fetchCategories }) => {
  useEffect(() => fetchCategories(), [fetchCategories]);

  const classes = useStyles();
  return (
    <div>
      <Card>
        <Typography className={classes.title} variant='h5'>
          All Categories
        </Typography>
        <CardContent>
          {categories.map((category) => (
            <HomePageSingleCategory
              name={category.name}
              slug={category.slug}
              key={category._id}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.public.category.categories,
});

export default connect(mapStateToProps, { fetchCategories })(
  HomePageCategories
);
