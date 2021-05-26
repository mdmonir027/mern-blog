import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useMemo, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registrationAction } from '../../../store/actions/authActions';
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

const RegistrationForm = (props) => {
  // main store
  const authState = useSelector((state) => state.auth);

  const history = useHistory();

  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const errors = useMemo(() => {
    if (authState.errorPage === 'registration') return authState.errors;
    return {};
  }, [authState.errors, authState.errorPage]);

  const submitHandler = (event) => {
    event.preventDefault();
    props.registrationAction(
      { email, password, passwordConfirm, username },
      history
    );
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <TextField
        type='text'
        label='Username'
        placeholder='Enter username'
        helperText={errors.username ? errors.username : ''}
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        error={!!errors.username}
        name='username'
        value={username}
        className={classes.input}
        onChange={(event) => setUsername(event.target.value)}
      />
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
      <TextField
        type='password'
        label='Confirm Password'
        placeholder='Confirm Password'
        helperText={errors.passwordConfirm ? errors.passwordConfirm : ''}
        fullWidth
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        error={!!errors.passwordConfirm}
        name='passwordConfirm'
        value={passwordConfirm}
        className={classes.input}
        onChange={(event) => setPasswordConfirm(event.target.value)}
      />

      <Button variant='contained' color='primary' type='submit' size='small'>
        Register
      </Button>
    </form>
  );
};

export default connect(null, { registrationAction })(RegistrationForm);
