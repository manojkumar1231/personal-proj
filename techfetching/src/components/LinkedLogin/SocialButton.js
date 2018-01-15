import React from 'react';
import PropTypes from 'prop-types';

import SocialButton from 'react-social-login';

const Button = ({ children, triggerLogin, ...props }) => (
  <button onClick={triggerLogin} {...props}>
    { children }
  </button>
);

Button.defaultProps = {
  children: {},
  triggerLogin: ''
};

Button.propTypes = {
  children: PropTypes.objectOf,
  triggerLogin: PropTypes.func
};

export default SocialButton(Button);
