import React from 'react';
import Checkbox from 'rc-checkbox';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

const renderCheckBox = ({
  input: {
    name, onChange, id, value
  }, label, disabled, className
}) => (
  <label className={className} htmlFor={name}>
    <Checkbox name={name} id={id} onChange={onChange} disabled={disabled} value={value} />
    {label}
  </label>
);


renderCheckBox.defaultProps = {
  className: ''
};

renderCheckBox.propTypes = {
  input: PropTypes.shape.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string
};

const CheckBox = ({
  id, name, className, disabled, label, value, onChange
}) => (
  <Field
    name={name}
    onChange={onChange}
    label={label}
    id={id}
    className={className}
    value={value}
    component={renderCheckBox}
    disabled={disabled}
  />
);

CheckBox.defaultProps = {
  disabled: false,
  value: '',
  className: ''
};

CheckBox.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string
};

export default CheckBox;
