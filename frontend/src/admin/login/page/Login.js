import { Card, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import style from '../styles/Login.module.css';

const Login = () => {
  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item md={4}>
        <Card>
          <div className={style.loginCard}>
            <h2 className='text-center'>Login To Your Account</h2>
            <LoginForm />
            <div className={style.linkWrapper}>
              <Link to='/register' className={style.link}>
                Haven't any account ? Create an account
              </Link>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
