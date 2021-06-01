import { Button, Card, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleBackdrop from '../../shared/backdrop/Backdrop';
import { loginAction } from '../../store/actions/authActions';

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

const Login = ({ auth, loginAction }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useMemo(() => {
    if (auth.error.page === 'login') return auth.error.errors;
    return {};
  }, [auth.error]);

  const submitHandler = (event) => {
    event.preventDefault();
    loginAction({ email, password });
  };

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item md={4}>
        <Card>
          <div className={classes.loginCard}>
            <h2 className='text-center'>Login To Your Account</h2>
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
            <div className={classes.linkWrapper}>
              <Link to='/register' className={classes.link}>
                Haven't any account ? Create an account
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

export default connect(mapStateToProps, { loginAction })(Login);
