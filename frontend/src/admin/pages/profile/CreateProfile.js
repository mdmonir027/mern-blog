import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createProfile } from '../../../store/actions/author/profileAction';
import UploadProfilePicture from '../../components/proifle/UploadProfilePicture';
import useStyles from './style/create';

const CreateProfile = ({ auth, createProfile, profile }) => {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [bio, setBio] = useState();
  const [facebook, setFacebook] = useState();
  const [twitter, setTwitter] = useState();
  const [instagram, setInstagram] = useState();
  const [github, setGithub] = useState();
  const [profilePic, setProfilePic] = useState({});

  // if (profile.hasProfile) {
  //   history.push('/admin/profile');
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const profileData = {
      title,
      name,
      bio,
      facebook,
      twitter,
      instagram,
      github,
      profilePic,
    };
    createProfile(profileData, history, '/admin/profile');
  };

  const errors = useMemo(() => {
    if (profile.error.page === 'add') return profile.error.errors;
    return {};
  }, [profile.error]);

  return (
    <div>
      <form onSubmit={submitHandler} method='post'>
        <Card className={classes.loginCard}>
          <Grid container spacing={3}>
            <Grid item md={8}>
              <div>
                <Typography gutterBottom variant='h5' component='h2'>
                  Basic Information
                </Typography>
                <TextField
                  type='text'
                  label='Name'
                  placeholder='Enter your full name'
                  helperText={errors.name ? errors.name : ''}
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.name}
                  name='email'
                  value={name}
                  className={classes.input}
                  onChange={(event) => setName(event.target.value)}
                />
                <TextField
                  type='email'
                  label='Email'
                  placeholder='Email address'
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disabled
                  value={auth.user.email}
                  className={classes.input}
                />
                <TextField
                  type='text'
                  label='Title'
                  placeholder='Enter your Title'
                  helperText={errors.title ? errors.title : ''}
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.title}
                  name='title'
                  value={title}
                  className={classes.input}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                  type='text'
                  label='Bio'
                  placeholder='Enter your bio'
                  helperText={errors.bio ? errors.bio : ''}
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.bio}
                  name='bio'
                  value={bio}
                  className={classes.input}
                  onChange={(event) => setBio(event.target.value)}
                />
              </div>
            </Grid>
            <Grid item md={4}>
              <UploadProfilePicture setProfilePic={setProfilePic} />
            </Grid>
          </Grid>
          <div>
            <Typography gutterBottom variant='h5' component='h2'>
              Links
            </Typography>
            <TextField
              type='url'
              label='Facebook'
              placeholder='Enter your facebook profile url'
              helperText={errors.facebook ? errors.facebook : ''}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.facebook}
              name='facebook'
              value={facebook}
              className={classes.input}
              onChange={(event) => setFacebook(event.target.value)}
            />
            <TextField
              type='url'
              label='Twitter'
              placeholder='Enter your twitter profile url'
              helperText={errors.twitter ? errors.twitter : ''}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.twitter}
              name='twitter'
              value={twitter}
              className={classes.input}
              onChange={(event) => setTwitter(event.target.value)}
            />
            <TextField
              type='url'
              label='Github'
              placeholder='Enter your github profile url'
              helperText={errors.github ? errors.github : ''}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.github}
              name='github'
              value={github}
              className={classes.input}
              onChange={(event) => setGithub(event.target.value)}
            />
            <TextField
              type='url'
              label='Instagram'
              placeholder='Enter your instagram profile url'
              helperText={errors.instagram ? errors.instagram : ''}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.instagram}
              name='instagram'
              value={instagram}
              className={classes.input}
              onChange={(event) => setInstagram(event.target.value)}
            />
          </div>
          <Button
            variant='contained'
            color='primary'
            className='text-center'
            type='submit'
          >
            Create Profile
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

export default connect(mapStateToProps, { createProfile })(CreateProfile);
