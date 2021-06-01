import { Button, Card, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import SimpleBackdrop from '../../shared/backdrop/Backdrop';
import { registerAction } from '../../store/actions/authActions';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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

const Register = ({ auth, registerAction }) => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const errors = useMemo(() => {
    if (auth.error.page === 'register') return auth.error.errors;
    return {};
  }, [auth.error]);
  const submitHandler = (event) => {
    event.preventDefault();
    registerAction({ username, email, password, passwordConfirm }, history);
  };

  return (
    <Grid container justify='center'>
      <Grid item md={4}>
        <Card>
          <div className={classes.loginCard}>
            <h2 className='text-center'>Register Your Account</h2>
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
                helperText={
                  errors.passwordConfirm ? errors.passwordConfirm : ''
                }
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
              <Button
                variant='contained'
                color='primary'
                type='submit'
                size='small'
              >
                Register
              </Button>
            </form>
            <div className={classes.linkWrapper}>
              <Link to='/login' className={classes.link}>
                Have an account ? Login here
              </Link>
            </div>
          </div>
        </Card>
        <SimpleBackdrop enabled={auth.loading} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { registerAction })(Register);
