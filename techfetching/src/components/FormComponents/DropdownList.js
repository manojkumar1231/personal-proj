import React from 'react';
import { Field, propTypes } from 'redux-form';
import PropTypes from 'prop-types';
import DropdownList from 'react-widgets/lib/DropdownList';

const renderSelectBox = ({ input, data, valueField, textField,
  isFilter, dropUp, handleOnChange, errorMessage, meta: { touched, error } }) =>
  (<div>
    <DropdownList
      {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []} // requires value to be an array
      data={data}
      filter={isFilter}
      valueField={valueField}
      textField={textField}
      dropUp={dropUp}
      onSearch={handleOnChange}
    />
    {touched && (error && <div className="error-message">{errorMessage || error}</div>)}
  </div>);

renderSelectBox.propTypes = { ...propTypes };

const DropdownField = ({ label, name, handleOnChange, data,
  valueField, textField, dropUp, errorMessage, isRequired }) =>
  (<div>
    {
      label ?
        <label htmlFor={name}>
          {label}{isRequired ? <span className="required_color">*</span> : ''}
        </label>
        : null
    }
    <Field
      name={name}
      component={renderSelectBox}
      data={data}
      valueField={valueField}
      textField={textField}
      isFilter={false}
      dropUp={dropUp}
      errorMessage={errorMessage}
      handleOnChange={handleOnChange}
    />
  </div>);

DropdownField.defaultProps = {
  isRequired: false,
  handleOnChange: null
};

DropdownField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func,
  data: PropTypes.object.isRequired,
  valueField: PropTypes.string.isRequired,
  textField: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  dropUp: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool
};

export default DropdownField;
