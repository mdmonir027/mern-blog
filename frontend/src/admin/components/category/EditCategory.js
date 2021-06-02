import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  TableCell,
  TextField,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { updateCategoryAction } from '../../../store/actions/author/categoryActions';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: 0,
  },
  inputGrid: {
    flex: 1,
  },
}));

const EditCategory = ({
  name,
  slug,
  toggleForm,
  updateCategoryAction,
  category,
}) => {
  const classes = useStyles();
  const errors = useMemo(() => {
    if (category.error.page === 'edit') return category.error.errors;
    return {};
  }, [category.error]);

  const [mutedName, setMutedName] = useState('');

  useEffect(() => setMutedName(name), [name]);

  const submitHandler = () => {
    if (name !== mutedName) {
      updateCategoryAction(mutedName, slug, (isValid) => {
        if (isValid) {
          toggleForm();
        }
      });
    } else {
      toggleForm();
    }
  };

  return (
    <TableCell colSpan={6}>
      <Grid container spacing={2}>
        <Grid item className={classes.inputGrid}>
          <TextField
            type='text'
            placeholder='Category name'
            helperText={errors.name ? errors.name : ''}
            error={!!errors.name}
            fullWidth
            margin='normal'
            value={mutedName}
            className={classes.input}
            onChange={(event) => setMutedName(event.target.value)}
          />
        </Grid>
        <Grid item>
          <ButtonGroup size='small' aria-label='outlined button group'>
            <Button onClick={submitHandler}>
              <CheckIcon />
            </Button>
            <Button onClick={toggleForm}>
              <ClearIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </TableCell>
  );
};

const mapStateToProps = (state) => ({
  category: state.author.category,
});

export default connect(mapStateToProps, { updateCategoryAction })(EditCategory);
