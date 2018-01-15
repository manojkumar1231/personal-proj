import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import * as notifActions from 'redux/modules/notifs';
import * as authActions from 'redux/modules/auth';
import Footer from '../../components/PageComponents/Footer';
import InputBox from '../../components/FormComponents/InputBox';
import styles from './ApplyJobs.scss';

@connect(state => ({ user: state.auth.user }), {
  ...notifActions, ...authActions
})
@reduxForm({
  form: 'email'
})
export default class ApplyJobs extends Component {
  render() {
    return (
      <div className="container">
        <Row className={styles.applyJobContainer}>
          <Helmet title="Apply Jobs" />
          <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1}>
            <div className={styles.jobHeader}>
              <div className="text-center">Apply to your selected job</div>
            </div>
            <div className={`${styles.jobSideHeader} m-t-35`}>
              Senior DevOps: Infrastructure Engineer
            </div>
            <Row className={`${styles.paragraphContent} m-t-10 m-b-100`}>
              <p>Assembling a top notch team is the #1 challenge forward-looking companies know they must solve.
                At Lever, we’re building next-generambtion collaboration software that helps companies bring more
                transparency, participation, and engagement to their hiring. As an Infrastructure Engineer, you’ll
                help us keep Lever ahead of customer growth by making a continual scaling improvements
               to the underlying infrastructure and help our product engineering team move quickly with confidence.
              </p>
              <p>
              As Lever’s Infrastructure Engineer, you'll be automating all the things: application and infrastructure
              deployment, continuous integration, monitoring, and alerting. Our engineering culture is highly
              collaborative, implementing many core DevOps philosophies focused on strong inter-team communication.
              We love to working together to make an amazing product!
              </p>
              <p>
              You’ll also own deployment and operation of Lever’s product systems and services. You’ll lead the design
              and development of tooling, automation, and dev processes for operating a fast-growing SaaS business.
               You'll also address the unique operational challenges of a real-time web application.
              </p>
            </Row>
            <div className={`${styles.jobSideHeader} m-t-35`}>
              Cover Letter
            </div>
            <Row className={`${styles.paragraphContent} m-t-10 m-b-100`}>
              <p>Its is with pleasure that I would like to submit my job application for the post of Senior DevOps:
                Infrastructure Engineer at Lever.co, I have extensive administrative experience in DevOps. For
                the past two years I have worked at the Info Obeject Inc, where I alternated between...
              </p>
            </Row>
            <div className={`${styles.jobSideHeader} m-t-35`}>
              Add yourself to alerts for DevOps Engineer Alerts
            </div>
            <Row className="m-t-10 m-b-100">
              <Col sm={6}>
              Leave us your Email and we’ll get back to you when we find more matches
                <div className="m-t-10"> <InputBox placeholder="Email" /></div>
              </Col>
              <Col sm={6}>
                <div className={styles.resumeContent}>Drop your resume here..</div>
              </Col>
            </Row>
            <Row className="m-b-100">
              <button className={`${styles.applyBtn} pull-right`}>Apply for this position</button>
            </Row>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}
