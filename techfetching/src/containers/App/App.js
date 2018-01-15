import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
// import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { logout } from 'redux/modules/auth';
// import { Notifs, InfoBar } from 'components';
// import config from 'config';

// @provideHooks({
//   fetch: async ({ store: { dispatch, getState } }) => {
//     if (!isAuthLoaded(getState())) {
//       await dispatch(loadAuth()).catch(() => null);
//     }
//     if (!isInfoLoaded(getState())) {
//       await dispatch(loadInfo()).catch(() => null);
//     }
//   }
// })
@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user
  }),
  { logout, pushState: push }
)
@withRouter
export default class App extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      // const redirect = this.props.location.query && this.props.location.query.redirect;
      this.props.pushState('jobdecription');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/jobdecription');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
    this.props.pushState('/login');
  };

  render() {
    const { user, route } = this.props;
    const styles = require('./App.scss');

    return (
      <div id="wrapper">
        <Helmet title="Login" />
        <Navbar fixedTop className={styles.navbar} >
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLinkContainer to="/" >
                {/* <div className={styles.brand}> */}
                <span><img src="/TechFetch_Logo_01.svg" className="img-responsive" alt="User" /></span>
                {/* </div> */}
              </IndexLinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse style={{ float: 'right' }}>
            <Nav>
              {
                <LinkContainer to="/jobdescription">
                  <NavItem>Home</NavItem>
                </LinkContainer>
              }
              {
                <LinkContainer to="/jobdescription">
                  <NavItem>Jobs</NavItem>
                </LinkContainer>
              }
              {
                <LinkContainer to="/jobdescription">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    Demo
                  </NavItem>
                </LinkContainer>
              }
              {
                <LinkContainer to="/jobdescription">
                  <NavItem>Services</NavItem>
                </LinkContainer>
              }
              {
                <LinkContainer to="/jobdescription">
                  <NavItem>Candidate</NavItem>
                </LinkContainer>
              }
              {
                <LinkContainer to="/jobdescription">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    Recruiter
                  </NavItem>
                </LinkContainer>
              }
              {
                <LinkContainer to="/jobdescription">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    DemandIndex
                  </NavItem>
                </LinkContainer>
              }
              {user && (
                <NavItem className="logout-link">
                  <h4> {user.firstName} {user.lastName} </h4>
                </NavItem>
              )}
              {!user && (
                <LinkContainer to="/logout">
                  <NavItem className="logout-link" onClick={this.handleLogout}>
                    <i className="fa fa-power-off" />
                  </NavItem>
                </LinkContainer>
              )}</Nav>
          </Navbar.Collapse>
        </Navbar >
        <div id="wrapper">
          <div className={styles.appContent}>
            {renderRoutes(route.routes)}
          </div>
        </div>
      </div>
    );
  }
}
