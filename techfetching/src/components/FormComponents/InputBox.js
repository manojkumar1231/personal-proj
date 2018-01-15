import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const popoverRight = (
  <Popover id="popover-positioned-right" className="popover-zindex">
    <span>
      <div className="filter_notes">Enter keywords with comma in between eg:(java, c++)</div>
    </span>
  </Popover>
);

const renderField = ({
  input, placeholder, isNote,
  className, errorMessage, type, meta: { touched, error }
}) =>
  (
    <div>
      <input
        {...input}
        placeholder={placeholder}
        className={className}
        type={type}
        min={type === 'number' ? 0 : ''}
      />
      {touched && (error && <div className="error-message">{errorMessage || error}</div>)}
      {
        isNote ?
          <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popoverRight}>
            <i className="fa fa-question-circle" aria-hidden="true" />
          </OverlayTrigger>
          : null
      }
    </div>
  );

renderField.defaultProps = {
  placeholder: '',
  className: '',
  isNote: false,
};

renderField.propTypes = {
  input: PropTypes.shape.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  meta: PropTypes.shape.isRequired,
  className: PropTypes.string,
  isNote: PropTypes.bool,
};

const maxValue = value => value && value > 100 ? 'Value must be less than 100' : undefined;

const InputBox = ({
  label, name, type, className, placeholder, errorMessage,
  isNote, noteClassName, noteContent, isRequired, validate
}) =>
  (
    <div>
      {label ?
        <label htmlFor={name}>{label}{isRequired ? <span className="required_color">*</span> : ''}</label>
        : null
      }
      <div>
        <Field
          name={name}
          component={renderField}
          type={type}
          isNote={isNote}
          noteClassName={noteClassName}
          noteContent={noteContent}
          className={className}
          placeholder={placeholder}
          errorMessage={errorMessage}
          validate={validate ? maxValue : null}
        />
      </div>
    </div>
  );

InputBox.defaultProps = {
  className: '',
  errorMessage: '',
  isRequired: false,
  placeholder: '',
  isNote: false,
  noteContent: '',
  noteClassName: '',
  validate: null
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  noteContent: PropTypes.string,
  isRequired: PropTypes.bool,
  isNote: PropTypes.bool,
  noteClassName: PropTypes.string,
  validate: PropTypes.string
};

export default InputBox;
