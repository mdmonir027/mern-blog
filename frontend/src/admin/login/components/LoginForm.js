import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useMemo, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { loginAction } from '../../../store/actions/authActions';
const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const LoginForm = (props) => {
  // main store
  const authState = useSelector((state) => state.auth);

  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useMemo(() => {
    return authState.errors;
  }, [authState.errors]);
  const loading = useMemo(() => {
    return authState.loading;
  }, [authState.loading]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.loginAction({ email, password });
    console.log(loading);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <TextField
        type='email'
        label='Email'
        placeholder='Email address'
        helperText={errors.email ? errors.email : ''}
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        error={!!errors.email}
        name='email'
        value={email}
        className={classes.input}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        type='password'
        label='Password'
        placeholder='Password'
        helperText={errors.password ? errors.password : ''}
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        error={!!errors.password}
        name='password'
        value={password}
        className={classes.input}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button variant='contained' color='primary' type='submit'>
        Login
      </Button>
    </form>
  );
};

export default connect(null, { loginAction })(LoginForm);
