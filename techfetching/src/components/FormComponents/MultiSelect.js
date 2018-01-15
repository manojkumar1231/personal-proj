import React from 'react';
import { Field } from 'redux-form';
import Multiselect from 'react-widgets/lib/Multiselect';
import PropTypes from 'prop-types';
import styles from './FormComponents.scss';

const renderMultiselect = ({
  input,
  data,
  valueField,
  textField,
  isFilter,
  handleSelect,
  dropUp,
  handleOnChange,
  placeholder,
  errorMessage,
  ignoreFilter,
  meta: { touched }
}) => (
  <div>
    {ignoreFilter ?
      <Multiselect
        {...input}
        onBlur={() => input.onBlur()}
        value={input.value || []} // requires value to be an array
        data={data}
        valueField={valueField}
        textField={textField}
        onSearch={handleOnChange}
        onSelect={handleSelect}
        dropUp={dropUp}
        placeholder={placeholder}
      /> :
      <Multiselect
        {...input}
        onBlur={() => input.onBlur()}
        value={input.value || []} // requires value to be an array
        data={data}
        filter={isFilter}
        valueField={valueField}
        textField={textField}
        onSearch={handleOnChange}
        onSelect={handleSelect}
        dropUp={dropUp}
        placeholder={placeholder}
      />
    }
    {touched && !input.value && <div className="error-message">{errorMessage}</div>}
  </div>
);

renderMultiselect.propTypes = {
  input: PropTypes.object.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  valueField: PropTypes.string.isRequired,
  textField: PropTypes.string.isRequired,
  dropUp: PropTypes.bool.isRequired,
  isFilter: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  ignoreFilter: PropTypes.bool.isRequired
};

class MultiselectField extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    valueField: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired,
    isRequired: PropTypes.bool.isRequired,
    placeholder: PropTypes.string,
    children: PropTypes.node.isRequired,
    labelClassName: PropTypes.string,
    errorMessage: PropTypes.string.isRequired,
    ignoreFilter: PropTypes.bool
  }

  static defaultProps = {
    data: [],
    dropUp: false,
    isRequired: false,
    handleOnChange: () => {},
    placeholder: '',
    children: <span />,
    labelClassName: '',
    ignoreFilter: false
  };

  constructor(props) {
    super(props);
    this.state = {
      disableCheckBox: true
    };
  }

  handleSelect = () => {
    this.setState({ disableCheckBox: false });
  }

  render() {
    const { label, name, labelClassName, handleOnChange, data, valueField, textField, isRequired,
      placeholder, errorMessage, ignoreFilter } = this.props;
    const childrenWithProps = React.Children.map(
      this.props.children, child => React.cloneElement(child, {
        disabled: this.state.disableCheckBox
      })
    );
    return (
      <div>
        <label htmlFor={name} className={labelClassName}>
          {label}{isRequired ? <span className="required_color">*</span> : ''}
        </label>
        <span className={`right ${styles.children_component}`}>
          {childrenWithProps}
        </span>
        <Field
          name={name}
          component={renderMultiselect}
          data={data}
          valueField={valueField}
          textField={textField}
          isFilter={false}
          className={labelClassName}
          handleSelect={this.handleSelect}
          handleOnChange={handleOnChange}
          placeholder={placeholder}
          errorMessage={errorMessage}
          ignoreFilter={ignoreFilter}
        />
      </div>
    );
  }
}

export default MultiselectField;
