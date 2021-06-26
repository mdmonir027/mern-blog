import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  Button,
  Card,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import {
  getSinglePost,
  updatePostAction,
} from '../../../store/actions/author/postActions';
import useStyles from './style/edit';

const EditPost = ({
  categories,
  postState,
  updatePostAction,
  getSinglePost,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (Object.keys(postState.post).length !== 0) {
      setTitle(postState.post.title);
      setBody(postState.post.body);
      setCategory(postState?.post?.category?.slug);
    }
  }, [postState.post]);

  useEffect(() => getSinglePost(slug), [slug, getSinglePost]);

  const errors = useMemo(() => {
    if (postState.error.page === 'edit') return postState.error.errors;
    return {};
  }, [postState.error]);

  const submitHandler = (event) => {
    event.preventDefault();
    updatePostAction({ title, category, body }, slug, history);
  };

  return (
    <Card>
      <Grid container justify='space-between' className={classes.Header}>
        <Grid item md={6}>
          <Typography variant='h5' component='h5'>
            Edit Post
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
              value={title}
              className={classes.input}
              onChange={(event) => setTitle(event.target.value)}
            />

            <Select
              value={category}
              fullWidth
              onChange={(event) => setCategory(event.target.value)}
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
                data={body}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setBody(data);
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
              Update Post
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

export default connect(mapStateToProps, { updatePostAction, getSinglePost })(
  EditPost
);
