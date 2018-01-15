import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import { push } from 'react-router-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import { saveUser } from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';
import * as authActions from 'redux/modules/auth';
import { toastr } from 'react-redux-toastr';
// import FacebookLogin from 'components/FacebookLogin/FacebookLogin';
// import LinkedLogin from 'components/LinkedLogin/LinkedLogin';
import SocialButton from 'components/LinkedLogin/SocialButton';
// import LinkedIn from 'react-linkedin-login';
// import autobind from 'autobind-decorator';
import styles from './Login.scss';

@connect(state => ({ user: state.auth.user }), {
  ...notifActions, ...authActions, pushState: push, saveUser
})
export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    saveUser: PropTypes.func.isRequired
  };

  // static defaultProps = {
  //   user: null
  // };

  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount(props) {
    console.log(props);
  }

  onFacebookLogin = async (err, data) => {
    if (err) return;

    try {
      await this.props.login('facebook', data);
      this.successLogin();
    } catch (error) {
      if (error.message === 'Incomplete oauth registration') {
        this.context.router.push({
          pathname: '/register',
          state: { oauth: error.data }
        });
      } else {
        throw error;
      }
    }
  };

  onLinkedinLogin = async data => {
    console.log('Login Success', data);
    if (data && data._profile && data._profile.email) {
      const values = {
        firstName: data._profile.firstName,
        email: data._profile.email,
        lastName: data._profile.lastName
      };
      this.props.saveUser(values).then(() => {
        console.log('hello');
        data = {};
        this.props.pushState('/login');
      });
      data = {};
      this.props.pushState('/jobdescription');
    }


    // try {
    //   await this.props.login('linkedin', data);
    //   this.successLogin();
    // } catch (error) {
    //   if (error.message === 'Incomplete oauth registration') {
    //     this.context.router.push({
    //       pathname: '/register',
    //       state: { oauth: error.data }
    //     });
    //   } else {
    //     throw error;
    //   }
    // }
  };

  onLinkedinLoginFailure = async err => {
    console.log('Login failed', err);
    this.props.pushState('/login');
  };

  // successLogin = () => {
  //   this.props.notifSend({
  //     message: "You're logged !",
  //     kind: 'success',
  //     dismissAfter: 2000
  //   });
  //   // this.redirectToMyOpenings();
  // };


  // redirectToMyOpenings = () => {
  //   this.props.pushState('/jobdescription');
  //   return <JobDescription />;
  // }
  successLogin = () => {
    this.props.pushState('/jobdescription');
    toastr.success('Login Success', 'Successfullly logged in');
  };

  login = async data => {
    // const result = await this.props.login('local', data);
    const response = await this.props.login('local', data);
    console.log('=====================', response);
    this.props.pushState('/jobdescription');
    toastr.success('Login Success', 'Successfullly logged in');
    return response;
  };

  // login = evt => {
  //   evt.preventDefault();
  //   this.props.login('local', this.props.values).then(this.successLogin).catch(() => {
  //     toastr.error('Login Error', 'Invalid login credentials');
  //   });.
  // }

  FacebookLoginButton = ({ facebookLogin }) => (
    <button className="btn btn-primary" onClick={facebookLogin}>
      Login with <i className="fa fa-facebook-f" />
    </button>
  );

  LinkedInLoginButton = ({ linkedinLogin }) => (
    <div>
      <button onClick={linkedinLogin}><img src="signin.png" alt="Sign in with Linkedin" /></button>
    </div>
  );

  render() {
    // const { user, logout } = this.props;
    // const authurl = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&' +
    // client_id=81wktwj337llyo&redirect_uri=http://537100ce.ngrok.io&state=2522abcde12345&scope=r_basicprofile';
    return (
      <Row>
        <Helmet title="Techfetch" />
        <div style={{ marginTop: '200px' }}>
          <Col lg={8} lgOffset={2} sm={8} smOffset={2}>
            <Row className={styles.loginContainer}>
              <Col lg={6} sm={6}>
                <div className={styles.displayJob}>
                  <div className={styles.displayJobHeader}>Sign in with your techfetch account!!</div>
                  <div className={`${styles.displayJobTitle} m-t-10`}>
                    Manage your job applications and apply to kjklkjobs with just one click...
                  </div>
                  <div className={`${styles.displayJobContent} m-t-10`}>It takes only few seconds...</div>
                  <div>{this.FacebookLoginButton}</div>
                  <div className="m-t-10">
                    <SocialButton
                      provider="linkedin"
                      appId="7775kne2guetd0"
                      onLoginSuccess={this.onLinkedinLogin}
                      onLoginFailure={this.onLinkedinLoginFailure}
                      className={styles.socialButton}
                      key="linkedin"
                    >
                      <span>
                        <img src="/linkedin.png" className="img-responsive" alt="User" />
                      </span>
                    </SocialButton>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <LoginForm onSubmit={this.login} />
              </Col>
            </Row>
          </Col>
        </div>
      </Row>
    );
  }
}
