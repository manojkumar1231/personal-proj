import React, { Component } from 'react';
import { reduxForm, propTypes, fieldPropTypes } from 'redux-form';
import { Row, Col } from 'react-bootstrap';
import registerValidation from './registerValidation';
import InputBox from '../../components/FormComponents/InputBox';
import CheckBox from '../../components/FormComponents/CheckBox';
import formConfig from '../FormConfig/FormConfig';
import styles from './RegisterForm.scss';

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
  form: 'register',
  validate: registerValidation
})
export default class RegisterForm extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={styles.loginFormContainer}>
        <Row>
          <Col sm={10}>
            <form name="loginForm" className={styles.loginForm} onSubmit={handleSubmit}>
              <Col sm={12}><InputBox {...formConfig.loginForm.email} /></Col>
              <Col sm={12} className="m-t-35"><InputBox {...formConfig.loginForm.password} /></Col>
              <Col sm={12} className="m-t-35">
                <label htmlFor="Resume">Resume</label>
                <div className={styles.resumeLayout}>
                  <div className={styles.resumeContent}> Drag and Drop or Click here to upload files
                    Formats: doc, docx, rtf, txt, pdf, odt, htm, html
                  </div>
                </div>
              </Col>
              <Col sm={12} className="m-t-35">
                <CheckBox
                  label="Subscribe to Techfetch Updates & Newsletters"
                  className={styles.opening_checkbox}
                />
              </Col>
              <Col sm={12} className="m-t-15">
                <CheckBox
                  label="By clicking Create Account you agree to the Terms & Conditions and Private Policy"
                  className={styles.opening_checkbox}
                />
              </Col>
              <Col sm={12} className="m-t-35">
                <button
                  type="submit"
                  className={styles.submitButton}
                  onSubmit={this.props.onSubmit}
                >
                  Sign Up
                </button>
              </Col>
              <Col sm={12}>Already a member?? Login here </Col>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
