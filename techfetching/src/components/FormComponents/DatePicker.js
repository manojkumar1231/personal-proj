import React from 'react';
import { Field } from 'redux-form';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import PropTypes from 'prop-types';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

Moment.locale('en');
momentLocalizer();

const renderDatePicker = ({ input: { onChange, value }, min, max, meta: { error, touched }, dropUp }) => (
  <div>
    <DateTimePicker
      onChange={onChange}
      format="DD MMM YYYY"
      value={!value ? null : new Date(value)}
      time={false}
      min={min}
      max={max}
      dropUp={dropUp}
    />
    {(error && touched && <div className="error-message">{error}</div>)}
  </div>
);

renderDatePicker.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  dropUp: PropTypes.bool
};

renderDatePicker.defaultProps = {
  min: null,
  max: null,
  dropUp: false
};

const DatePicker = ({ name, label, className, min, max, dropUp, isRequired }) => (
  <div className={className}>
    {label ? <label htmlFor={name}>{label}{isRequired ? <span className="required_color">*</span> : ''}</label> : ''}
    <Field
      name={name}
      component={renderDatePicker}
      className={className}
      max={max}
      min={min}
      dropUp={dropUp}
    />
  </div>
);

DatePicker.defaultProps = {
  label: '',
  className: '',
  min: null,
  max: null,
  isRequired: false,
  dropUp: false
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  dropUp: PropTypes.bool,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date)
};
export default DatePicker;
