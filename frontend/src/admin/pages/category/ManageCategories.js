import { Card, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
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
});

const ManageCategory = ({ getAllCategories, category }) => {
  const classes = useStyles();
  const categories = useMemo(() => category.categories, [category.categories]);

  useEffect(() => getAllCategories(), [getAllCategories]);

  return (
    <Card>
      <Grid container justify='space-between' className={classes.tableHeader}>
        <Grid item md={6}>
          <Typography variant='h5' component='h5'>
            Manage All Category
          </Typography>
        </Grid>
        <Grid item md={6}>
          button
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='caption table'>
          <caption>A basic table example with a caption</caption>
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
            {categories.map((category, index) => (
              <SingleCategory
                category={category}
                sl={index + 1}
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
