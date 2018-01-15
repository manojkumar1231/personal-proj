import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { toastr } from 'react-redux-toastr';
import { push } from 'react-router-redux';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Row, Col } from 'react-bootstrap';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';
import styles from './Register.scss';

@connect(() => ({}), { ...notifActions, ...authActions, pushState: push })
export default class Register extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.object
    }).isRequired,
    register: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  getInitialValues = () => {
    const { location } = this.props;
    return location.state && location.state.oauth;
  };

  register = data => {
    this.props.register(data).then(this.successRegister).catch(() => {
      toastr.error('Registration Failed', 'Invalid user credentials');
    });
  };

  successRegister = () => {
    this.props.pushState('/login');
    toastr.success('Registration Success', 'Successfullly registered');
  };

  // successRegister = () => {
  //   this.props.notifSend({
  //     message: "You'r now registered !",
  //     kind: 'success',
  //     dismissAfter: 2000
  //   });
  // };

  render() {
    return (
      <Row>
        <Helmet title="Register" />
        <div style={{ marginTop: '100px' }}>
          <Col lg={8} lgOffset={2} sm={8} smOffset={2}>
            <Row className={styles.loginContainer}>
              <Col lg={6} sm={6}>
                <div className={styles.displayJob}>
                  <div className={styles.displayJobHeader}>Create an account on Techfetch</div>
                  <div className={`${styles.displayJobTitle} m-t-10`}>
                    Manage your job applications and apply to jhgjobs with just one click...
                  </div>
                  <div className={`${styles.displayJobContent} m-t-10`}>It takes only few seconds...</div>
                </div>
              </Col>
              <Col sm={6} lg={6}>
                <RegisterForm onSubmit={this.register} />
              </Col>
            </Row>
          </Col>
        </div>
      </Row>
    );
  }
}
