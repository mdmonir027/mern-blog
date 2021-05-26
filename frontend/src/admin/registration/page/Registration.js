import { Card, Grid } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProgressBar from '../../../shared/components/progressBar';
import RegistrationForm from '../components/RegistrationForm';
import style from '../styles/registration.module.css';
const Registration = () => {
  const authState = useSelector((state) => state.auth);
  const loading = useMemo(() => authState.loading, [authState.loading]);

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item md={4}>
        <Card>
          {loading && <ProgressBar />}

          <div className={style.loginCard}>
            <h2 className='text-center'>Register Your Account</h2>
            <RegistrationForm />
            <div className={style.linkWrapper}>
              <Link to='/login' className={style.link}>
                Have an account ? Login here
              </Link>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Registration;
