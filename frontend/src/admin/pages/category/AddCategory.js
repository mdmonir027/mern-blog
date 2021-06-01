import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import SimpleBackdrop from '../../../shared/backdrop/Backdrop';
import { addCategory } from '../../../store/actions/author/categoryActions';
const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  input: {
    marginTop: theme.spacing(2),
  },
  loginCard: {
    padding: 15,
  },
  linkWrapper: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    color: '#3f51b5',
  },
}));

const AddCategory = ({ auth, category, addCategory }) => {
  const classes = useStyles();
  const history = useHistory();
  const { path } = useRouteMatch();
  const [name, setName] = useState('');
  const errors = useMemo(() => {
    if (category.error.page === 'add') return category.error.errors;
    return {};
  }, [category.error]);

  const submitHandler = (event) => {
    event.preventDefault();
    addCategory(name, history, `${path}/category`);
  };

  return (
    <div>
      <Grid container>
        <Grid item md={4}>
          <SimpleBackdrop enabled={category.loading} />
          <form className={classes.form} onSubmit={submitHandler}>
            <TextField
              type='text'
              label='Category Name'
              placeholder='Enter category name'
              helperText={errors.name ? errors.name : ''}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.name}
              name='name'
              value={name}
              className={classes.input}
              onChange={(event) => setName(event.target.value)}
            />

            <Button
              variant='contained'
              color='primary'
              type='submit'
              size='small'
            >
              Add Category
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  category: state.author.category,
});

export default connect(mapStateToProps, { addCategory })(AddCategory);
