import { Button, Card, TextField, Typography } from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { changePassword } from '../../../store/actions/author/profileAction';
import useStyles from './style/password';

const ChangePassword = ({ profile, changePassword }) => {
  const classes = useStyles();
  const history = useHistory();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    changePassword({ oldPassword, newPassword, passwordConfirm }, history);
  };

  const errors = useMemo(() => {
    if (profile.error.page === 'password') return profile.error.errors;
    return {};
  }, [profile.error]);

  return (
    <div>
      <form onSubmit={submitHandler} method='post'>
        <Card className={classes.loginCard}>
          <Typography gutterBottom variant='h5' component='h2'>
            Basic Information
          </Typography>
          <TextField
            type='password'
            label='Old Password'
            placeholder='Enter old password'
            helperText={errors.oldPassword ? errors.oldPassword : ''}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            error={!!errors.oldPassword}
            value={oldPassword}
            className={classes.input}
            onChange={(event) => setOldPassword(event.target.value)}
          />

          <TextField
            type='password'
            label='New Password'
            placeholder='Enter new password'
            helperText={errors.newPassword ? errors.newPassword : ''}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            error={!!errors.newPassword}
            value={newPassword}
            className={classes.input}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <TextField
            type='password'
            label='Confirm Password'
            placeholder='Confirm password'
            helperText={errors.passwordConfirm ? errors.passwordConfirm : ''}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            error={!!errors.passwordConfirm}
            value={passwordConfirm}
            className={classes.input}
            onChange={(event) => setPasswordConfirm(event.target.value)}
          />

          <Button
            variant='contained'
            color='primary'
            className='text-center'
            type='submit'
          >
            Change Password
          </Button>
        </Card>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.author.profile,
});

export default connect(mapStateToProps, { changePassword })(ChangePassword);
