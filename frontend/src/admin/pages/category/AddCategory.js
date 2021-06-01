import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
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
const AddCategory = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const errors = {};

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid container>
        <Grid item md={4}>
          <form className={classes.form} onSubmit={submitHandler}>
            <TextField
              type='text'
              label='Category Name'
              placeholder='Email address'
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

export default AddCategory;
