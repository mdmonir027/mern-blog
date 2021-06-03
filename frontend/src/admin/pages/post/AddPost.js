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
import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addPostAction } from '../../../store/actions/author/postActions';
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

const AddPost = ({ categories, postState, addPostAction }) => {
  const classes = useStyles();
  const history = useHistory();
  const [post, setPost] = useState({
    title: '',
    body: '',
    category: '',
  });

  const errors = useMemo(() => {
    if (postState.error.page === 'add') return postState.error.errors;
    return {};
  }, [postState.error]);

  const changeHandler = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addPostAction(post, history);
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
          <form className={classes.form} onSubmit={submitHandler}>
            <TextField
              type='text'
              placeholder='Enter category name'
              error={!!errors?.title}
              helperText={errors?.title ? errors.title : ''}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
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
              error={!!errors?.category}
              helperText={errors?.category ? errors.category : ''}
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
              {errors?.body && (
                <p style={{ color: 'red', marginTop: '5px' }}>{errors.body}</p>
              )}
            </div>

            <Button
              variant='contained'
              color='primary'
              type='submit'
              size='small'
              onClick={submitHandler}
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
  postState: state.author.post,
});

export default connect(mapStateToProps, { addPostAction })(AddPost);
