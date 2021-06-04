import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: theme.spacing(2),
  },
  loginCard: {
    padding: 15,
  },
  imagArea: {},
  imageWrapper: {},
  profileImage: {
    height: 320,
    width: '100%',
  },
  uploadImageButton: {},
}));
const CreateProfile = () => {
  const classes = useStyles();
  return (
    <div>
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
                helperText={''}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
                error={false}
                name='email'
                value=''
                className={classes.input}
                onChange={(event) => console.log(event.target.value)}
              />
              <TextField
                type='email'
                label='Email'
                placeholder='Email address'
                helperText={''}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
                error={false}
                name='email'
                value=''
                className={classes.input}
                onChange={(event) => console.log(event.target.value)}
              />
              <TextField
                type='text'
                label='Title'
                placeholder='Enter your Title'
                helperText={''}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
                error={false}
                name='title'
                value=''
                className={classes.input}
                onChange={(event) => console.log(event.target.value)}
              />
              <TextField
                type='text'
                label='Bio'
                placeholder='Enter your bio'
                helperText={''}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true,
                }}
                error={false}
                name='bio'
                value=''
                className={classes.input}
                onChange={(event) => console.log(event.target.value)}
              />
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.imagArea}>
              <div className={classes.imageWrapper}>
                <img
                  src='https://images.pexels.com/photos/7137554/pexels-photo-7137554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt='profile'
                  className={classes.profileImage}
                />
              </div>
              <Button
                variant='contained'
                color='primary'
                className={`text-center ${classes.uploadImageButton}`}
                style={{ width: '100%' }}
              >
                Upload Image
              </Button>
            </div>
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
            helperText={''}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            error={false}
            name='facebook'
            value=''
            className={classes.input}
            onChange={(event) => console.log(event.target.value)}
          />
          <TextField
            type='url'
            label='Twitter'
            placeholder='Enter your twitter profile url'
            helperText={''}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            error={false}
            name='twitter'
            value=''
            className={classes.input}
            onChange={(event) => console.log(event.target.value)}
          />
          <TextField
            type='url'
            label='Github'
            placeholder='Enter your github profile url'
            helperText={''}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            error={false}
            name='github'
            value=''
            className={classes.input}
            onChange={(event) => console.log(event.target.value)}
          />
          <TextField
            type='url'
            label='Instagram'
            placeholder='Enter your instagram profile url'
            helperText={''}
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            error={false}
            name='instagram'
            value=''
            className={classes.input}
            onChange={(event) => console.log(event.target.value)}
          />
        </div>
        <Button variant='contained' color='primary' className='text-center'>
          Create Profile
        </Button>
      </Card>
    </div>
  );
};

export default CreateProfile;
