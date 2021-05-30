import {
  Avatar,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useMemo } from 'react';
import { connect, useSelector } from 'react-redux';
import ProgressBar from '../../../../../shared/components/progressBar';
import { setAllAuthor } from '../../../../../store/actions/authorActions';

const useStyles = makeStyles((theme) => ({
  title: {
    background: '#0e33fd',
    textAlign: 'center',
    color: 'white',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    cursor: 'Pointer',
  },
}));
const TopAuthors = ({ setAllAuthor }) => {
  const classes = useStyles();
  const authorState = useSelector((state) => state.author);
  const authors = useMemo(
    () => authorState.authors.slice(0, 10),
    [authorState.authors]
  );
  const loading = useMemo(() => authorState.loading, [authorState.loading]);

  useEffect(() => setAllAuthor(), [setAllAuthor]);

  return (
    <Card>
      {loading && <ProgressBar />}

      <Typography className={classes.title} variant='h5'>
        Top Authors
      </Typography>
      <CardContent>
        <Grid container>
          {!loading &&
            authors.map((author) => (
              <Grid item md={2}>
                <Avatar
                  key={author._id}
                  src={author.profilePic}
                  alt={author.username}
                />
              </Grid>
            ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default connect(null, { setAllAuthor })(TopAuthors);
