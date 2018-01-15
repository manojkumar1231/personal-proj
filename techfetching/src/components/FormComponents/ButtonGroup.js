import React, { Component } from 'react';
import { Field, propTypes } from 'redux-form';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import InputBox from '../../components/FormComponents/InputBox';
import DatePicker from '../../components/FormComponents/DatePicker';
import { getOpeningFormConfig } from '../../formConfig/SaveOpening';
import styles from './FormComponents.scss';

class renderButtonGroup extends Component {
  static propTypes = {
    ...propTypes,
    buttons: PropTypes.array.isRequired,
    activeBtn: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: props.input.value || ''
    };
  }

  handleClick = evt => {
    evt.preventDefault();
    const { input } = this.props;
    this.setState({ activeBtn: evt.target.id });
    input.onChange(evt.target.id);
  }

  render() {
    const { buttons, activeBtn } = this.props;
    const filterConfig = getOpeningFormConfig(this);
    const { value } = this.props.input;
    const colSize = Math.round(12 / buttons.length);
    return (
      <Row>
        <Col lg={12} className={styles.button_group}>
          {
            buttons.map(button => {
              const isActive = (this.state.activeBtn || activeBtn) === button.id ? styles.active : '';
              return (
                <Col lg={colSize} className="p-0">
                  <button className={`btn ${isActive}`} id={button.id} onClick={this.handleClick}>{button.name}</button>
                </Col>
              );
            })
          }
        </Col>
        {
          (value === 'fullTime' || value === '') &&
          <div>
            <Col sm={6} className="m-t-10 m-b-5">
              <InputBox {...filterConfig.jobOpeningDetails.salary} />
            </Col>
            <Col sm={6} className="m-t-10 m-b-5">
              <InputBox {...filterConfig.jobOpeningDetails.permFee} />
            </Col>
          </div>
        }
        {
          value === 'contract' &&
          <div>
            <Col sm={6} className="m-t-10 m-b-5">
              <DatePicker {...filterConfig.jobOpeningDetails.startDate} />
            </Col>
            <Col sm={6} className="m-t-10 m-b-5">
              <DatePicker {...filterConfig.jobOpeningDetails.endDate} />
            </Col>
            <Col sm={6} className="m-t-10 m-b-5">
              <InputBox {...filterConfig.jobOpeningDetails.payRate} />
            </Col>
            <Col sm={6} className="m-t-10 m-b-5">
              <InputBox {...filterConfig.jobOpeningDetails.salaryContract} />
            </Col>
          </div>
        }
        {
          value === 'partTime' &&
          <div>
            <Col sm={6} className="m-t-10 m-b-5">
              <InputBox {...filterConfig.jobOpeningDetails.billRate} />
            </Col>
            <Col sm={6} className="m-t-10 m-b-5">
              <InputBox {...filterConfig.jobOpeningDetails.payRateFreelance} />
            </Col>
          </div>
        }
      </Row>
    );
  }
}

renderButtonGroup.defaultProps = {
  activeBtn: ''
};

const ButtonGroup = ({ label, name, buttons, activeBtn }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field
      name={name}
      component={renderButtonGroup}
      buttons={buttons}
      activeBtn={activeBtn}
    />
  </div>
);

ButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  buttons: PropTypes.array.isRequired,
  activeBtn: PropTypes.string.isRequired
};

export default ButtonGroup;

