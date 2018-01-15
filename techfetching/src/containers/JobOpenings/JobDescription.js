import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as notifActions from 'redux/modules/notifs';
import * as authActions from 'redux/modules/auth';
import Footer from '../../components/PageComponents/Footer';
import styles from './JobDescription.scss';

@connect(state => ({ user: state.auth.user }), {
  ...notifActions, ...authActions
})
export default class JobDescription extends Component {
  render() {
    const { user } = this.props;
    console.log('user', user);
    if (user && user.token) {
      console.log(user.token);
      sessionStorage.setItem('id_token', user.token);
    }
    return (
      <div className="container">
        <Row className={styles.jobDescriptionContainer}>
          <Helmet title="Job description" />
          <Col sm={9}>
            <div className={styles.displayJob}>
              Senior DevOps: Infrastructure Engineer
            </div>
          </Col>
          <Col sm={3}>
            Senior DevOps: Infrastructure Engineer
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}
