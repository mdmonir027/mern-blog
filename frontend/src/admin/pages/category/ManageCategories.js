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
import { getAllCategories } from '../../../store/actions/author/categoryActions';
import SingleCategory from '../../components/category/SingleCategory';

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

const ManageCategory = ({ auth, getAllCategories, category }) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const history = useHistory();
  const categories = useMemo(() => category.categories, [category.categories]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (auth.isAuthenticated && auth.user.isAdmin) {
      getAllCategories();
    }
  }, [getAllCategories, auth]);

  if (auth.isAuthenticated && !auth.user.isAdmin) {
    history.push('/admin/dashboard');
  }

  return (
    <Card>
      <Grid container justify='space-between' className={classes.tableHeader}>
        <Grid item md={6}>
          <Typography variant='h5' component='h5'>
            Manage All Category
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Link to={`${url}/add`} className={classes.link}>
            <Button variant='contained' color='primary'>
              Add Category
            </Button>
          </Link>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='caption table'>
          <caption>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component='div'
              count={categories.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </caption>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Total Posts</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((category, index) => (
                <SingleCategory
                  category={category}
                  sl={rowsPerPage * page + index + 1}
                  key={category._id}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <SimpleBackdrop enabled={category.loading} />
    </Card>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  category: state.author.category,
});

export default connect(mapStateToProps, { getAllCategories })(ManageCategory);
