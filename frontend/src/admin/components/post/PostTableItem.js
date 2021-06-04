import { Button, ButtonGroup, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { deletePostAction } from '../../../store/actions/author/postActions';

const PostTableItem = ({ post, sl, deletePostAction }) => {
  const { path } = useRouteMatch();
  return (
    <TableRow hover>
      <TableCell component='th' scope='row'>
        {sl}
      </TableCell>
      <TableCell align='center'>{post.title}</TableCell>
      <TableCell align='center'>{post.category?.name || ''}</TableCell>
      <TableCell align='center'>{post.likes.length}</TableCell>
      <TableCell align='center'>{post.comments.length}</TableCell>
      <TableCell align='center'>
        {new Date(post.createdAt).toLocaleString()}
      </TableCell>

      <TableCell align='center'>
        <ButtonGroup size='small' aria-label=' outlined button group'>
          <Button>
            <Link to={`${path}/edit/${post.slug}`}>
              <VisibilityIcon />
            </Link>
          </Button>
          <Button onClick={() => deletePostAction(post.slug)}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default connect(null, { deletePostAction })(PostTableItem);
