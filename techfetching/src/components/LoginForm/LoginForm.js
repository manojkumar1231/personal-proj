import React, { Component } from 'react';
import { reduxForm, propTypes, fieldPropTypes } from 'redux-form';
import { Row, Col } from 'react-bootstrap';
import loginValidation from './loginValidation';
import InputBox from '../../components/FormComponents/InputBox';
import formConfig from '../FormConfig/FormConfig';

const styles = require('./LoginForm.scss');

const Input = ({
  input, label, type, meta: { touched, error }
}) => (
  <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className="col-sm-2">
      {label}
    </label>
    <div className="col-sm-10">
      <input {...input} type={type} className="form-control" />
      {error && touched && <span className="glyphicon glyphicon-remove form-control-feedback" />}
      {error &&
        touched && (
          <div className="text-danger">
            <strong>{error}</strong>
          </div>
        )}
    </div>
  </div>
);

Input.propTypes = fieldPropTypes;

@reduxForm({
  form: 'login',
  validate: loginValidation
})
export default class LoginForm extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={styles.loginFormContainer}>
        <Col sm={10}>
          <form name="loginForm" className={styles.loginForm} onSubmit={handleSubmit}>
            <Col sm={12}><InputBox {...formConfig.loginForm.email} /></Col>
            <Col sm={12} className="m-t-35"><InputBox {...formConfig.loginForm.password} /></Col>
            <Col sm={12} className="m-t-35">
              <button type="submit" className={styles.submitButton}>Login</button>
            </Col>
            <Col sm={12}>Already a member?? Login here </Col>
          </form>
        </Col>
      </div>
    );
  }
}
