import {
  Button,
  ButtonGroup,
  Switch,
  TableCell,
  TableRow,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteCategoryAction } from '../../../store/actions/author/categoryActions';
import EditCategory from './EditCategory';

const SingleCategory = ({ category, sl, deleteCategoryAction }) => {
  const [editForm, setEditForm] = useState(false);

  const toggleForm = () => setEditForm(!editForm);

  return (
    <TableRow>
      {editForm ? (
        <EditCategory
          name={category.name}
          toggleForm={toggleForm}
          slug={category.slug}
        />
      ) : (
        <>
          <TableCell component='th' scope='row'>
            {sl}
          </TableCell>
          <TableCell align='center'>{category.name}</TableCell>
          <TableCell align='center'>
            <Switch
              checked={category.status === 1}
              onChange={() => console.log('cat')}
              color='primary'
              name='checkedB'
              inputProps={{ 'aria-label': 'primary checkbox' }}
              size='small'
            />
          </TableCell>
          <TableCell align='center'>{category.posts.length}</TableCell>
          <TableCell align='center'>
            <ButtonGroup size='small' aria-label=' outlined button group'>
              <Button onClick={toggleForm}>
                <EditIcon />
              </Button>
              <Button onClick={() => deleteCategoryAction(category.slug)}>
                <DeleteIcon />
              </Button>
            </ButtonGroup>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default connect(null, { deleteCategoryAction })(SingleCategory);
