import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import CategoryPosts from './CategoryPosts';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth: 345,
    padding: '7px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
  },
}));

const Category = ({ name, id }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={classes.wrapper}>
      <Typography variant='h6' onClick={() => setExpanded(!expanded)}>
        {name}
      </Typography>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CategoryPosts id={id} />
      </Collapse>
    </div>
  );
};
export default Category;
