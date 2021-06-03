import {
  Button,
  Card,
  Grid,
  TablePagination,
  Typography,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import SimpleBackdrop from '../../../shared/backdrop/Backdrop';
import { getAllPostAction } from '../../../store/actions/author/postActions';
import PostTableItem from '../../components/post/PostTableItem';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeader: {
    background: '#F0F0F7',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  link: {
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    color: '#3f51b5',
    float: 'right',
  },
});

const ManagePost = ({ getAllPostAction, post }) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const history = useHistory();
  const posts = useMemo(() => post.posts, [post.posts]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    console.log(history); // todo remove later
  };

  useEffect(() => getAllPostAction(), [getAllPostAction]);

  return (
    <Card>
      <Grid container justify='space-between' className={classes.tableHeader}>
        <Grid item md={6}>
          <Typography variant='h5' component='h5'>
            Manage All Posts
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Link to={`${url}/add`} className={classes.link}>
            <Button variant='contained' color='primary'>
              Add Post
            </Button>
          </Link>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='caption table'>
          <caption>
            <TablePagination
              rowsPerPageOptions={[10, 20, 30, 50, 100]}
              component='div'
              count={posts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </caption>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align='center'>Tittle</TableCell>
              <TableCell align='center'>Category</TableCell>
              <TableCell align='center'>Likes</TableCell>
              <TableCell align='center'>Comments</TableCell>
              <TableCell align='center'>Created At</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .reverse()
              .map((post, index) => (
                <PostTableItem
                  post={post}
                  sl={rowsPerPage * page + index + 1}
                  key={post._id}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SimpleBackdrop enabled={post.loading} />
    </Card>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.author.post,
});

export default connect(mapStateToProps, { getAllPostAction })(ManagePost);
