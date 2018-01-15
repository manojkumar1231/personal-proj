import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './Footer.scss';

const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <div className="footer">
      <Row>
        <Row className={styles.footer}>
          <Col sm={2} smOffset={1}>
            <ul className={styles.footerSection}>
              <li>Home</li>
              <li>Site Map</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Usage Policy</li>
            </ul>
          </Col>
          <Col sm={2} className={styles.footerSection}>
            <ul>
              <li> Feedback</li>
              <li> Contact Us</li>
              <li> Live Help</li>
              <li> Unsubscribe</li>
              <li> Resubscribe</li>
              <li> Employer Directory</li>
            </ul>
          </Col>
          <Col sm={2} className={styles.footerSection}>
            <ul>
              <li> Events</li>
              <li> Tech Job Fairs</li>
              <li> Webinars</li>
              <li> News</li>
              <li> Press Release</li>
              <li> Market Report</li>
            </ul>
          </Col>
          <Col sm={2} className={styles.footerSection}>
            <ul>
              <li> DemandIndex</li>
              <li> Customer Testimonials</li>
              <li> IT Courses</li>
              <li> Jobs by Category</li>
              <li> Jobs by State</li>
              <li> Jobs by City</li>
            </ul>
          </Col>
          <Col sm={2} className={styles.footerSection}>
            <ul>
              <li> About</li>
              <li> Contact Us</li>
              <li> Our Blog</li>
              <li className={styles.logoSection}>
                <span className={styles.logo}><i className="fa fa-linkedin" aria-hidden="true" /></span>
                <span className={styles.logo}><i className="fa fa-facebook" aria-hidden="true" /></span>
                <span className={styles.logo}><i className="fa fa-twitter" aria-hidden="true" /></span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className={styles.copyrightSection}>
          <div className={styles.copyrightContent}>
            <strong>Copyright {year}</strong>&nbsp;
            <span className={styles.textStyle1}><a href="https://www.techfetch.com">© techfetch.com</a></span>
            <span className={styles.textStyle2}>All Rights Reserved</span>
          </div>
        </Row>
      </Row>
    </div>
  );
};
export default Footer;
