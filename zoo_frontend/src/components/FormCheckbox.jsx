import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

const CustomFormCheckbox = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <FormControl required error={props.error} component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox id={props.id} checked={props.value} onChange={(e) => props.onChange(e)} value={props.label} />
              }
            label={props.label}
          />
        </FormGroup>
        {props.helperText &&
          <FormHelperText>{props.helperText}</FormHelperText>
        }
      </FormControl>
    </div>
  );
};


CustomFormCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  helperText: PropTypes.string,
  value: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

CustomFormCheckbox.defaultProps = {
  onChange: () => {},
  error: false,
  helperText: '',
};

export default withStyles(styles)(CustomFormCheckbox);
