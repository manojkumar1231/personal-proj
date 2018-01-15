import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

const renderField = ({ input, placeholder, type, meta: { touched, error } }) => (
  <div>
    <textarea {...input} placeholder={placeholder} type={type} />
    {touched && (error && <div className="error-message">{error}</div>)}
  </div>
);

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

const TextArea = ({ label, name, type, className, placeholder, isRequired }) => (
  <div>
    <label htmlFor={name}>{label}{isRequired ? <span className="required_color">*</span> : ''}</label>
    <div>
      <Field
        name={name}
        component={renderField}
        type={type}
        className={className}
        placeholder={placeholder}
      />
    </div>
  </div>
);

TextArea.defaultProps = {
  className: '',
  isRequired: false
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool
};

export default TextArea;
