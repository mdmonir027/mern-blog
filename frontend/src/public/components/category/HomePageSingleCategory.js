import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import HomePageSingleCategoryPosts from '../posts/HomePageSingleCategoryPosts';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: 345,
    padding: '7px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
  postLink: {
    textDecoration: 'none',
    color: '#000',
  },
  postsWrapper: {
    background: '#F5F5F5',
  },
}));

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
