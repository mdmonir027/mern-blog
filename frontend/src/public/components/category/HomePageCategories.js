import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../store/actions/public/categoryActions';
import HomePageSingleCategory from './HomePageSingleCategory';

const useStyles = makeStyles((theme) => ({
  title: {
    background: '#0e33fd',
    textAlign: 'center',
    color: 'white',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
}));

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
