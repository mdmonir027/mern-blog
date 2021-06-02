import { Card, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { connect } from 'react-redux';

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

function createData(name, posts) {
  return { name, posts };
}

const rows = [
  createData('Frozen yoghurt', []),
  createData('Ice cream sandwich', []),
  createData('Eclair', []),
];

const ManageCategory = () => {
  const classes = useStyles();

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
              <TableCell align='center'>Total Posts</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row._id}>
                <TableCell component='th' scope='row'>
                  {index}
                </TableCell>
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center'>{row.posts.length}</TableCell>
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  category: state.author.category,
});

export default connect(mapStateToProps)(ManageCategory);
