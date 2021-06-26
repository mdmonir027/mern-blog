import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import HomePageSingleCategoryPosts from '../posts/HomePageSingleCategoryPosts';
import useStyles from './style/singleCategory';

const HomePageSingleCategory = ({ name, slug }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={classes.wrapper}>
      <Typography variant='h6' onClick={() => setExpanded(!expanded)}>
        {name}
      </Typography>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <HomePageSingleCategoryPosts categorySlug={slug} />
      </Collapse>
    </div>
  );
};

export default HomePageSingleCategory;
