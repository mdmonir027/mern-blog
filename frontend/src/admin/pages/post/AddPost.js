import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  Button,
  Card,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  input: {
    marginTop: theme.spacing(2),
    marginBottom: '20px',
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
    float: 'right',
  },
  Header: {
    background: '#F0F0F7',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    paddingLeft: '20px',
    paddingRight: '20px',
    boxSizing: 'border-box',
  },
}));

const AddPost = ({ categories }) => {
  const classes = useStyles();
  const [post, setPost] = useState({
    title: '',
    body: '',
    category: '',
  });

  const changeHandler = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Card>
      <Grid container justify='space-between' className={classes.Header}>
        <Grid item md={6}>
          <Typography variant='h5' component='h5'>
            Add New Post
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Link to={`/admin/post`} className={classes.link}>
            <Button variant='contained' color='primary'>
              Manage Post
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container className={classes.content}>
        <Grid item md={12}>
          <form className={classes.form}>
            <TextField
              type='text'
              placeholder='Enter category name'
              helperText={''}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              error={false}
              name='title'
              value={post.title}
              className={classes.input}
              onChange={changeHandler}
            />

            <Select
              value={post.category}
              fullWidth
              onChange={changeHandler}
              name='category'
              displayEmpty
              className={classes.input}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value='' disabled>
                Select A Category
              </MenuItem>
              {categories.map((cat) => (
                <MenuItem value={cat.slug}>{cat.name}</MenuItem>
              ))}
            </Select>

            <div className={classes.input}>
              <CKEditor
                editor={ClassicEditor}
                data={post.body}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setPost({
                    ...post,
                    body: data,
                  });
                }}
              />
            </div>

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
    </Card>
  );
};

const mapStateToProps = (state) => ({
  categories: state.author.category.categories,
});

export default connect(mapStateToProps)(AddPost);
