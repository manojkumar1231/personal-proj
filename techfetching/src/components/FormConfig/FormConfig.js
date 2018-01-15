export default {
  loginForm: {
    email: {
      type: 'text',
      name: 'email',
      label: 'Email Address',
      placeholder: 'Your Valid Email',
      isRequired: true,
      errorMessage: 'Email cannot be empty'
    },
    password: {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      isRequired: true,
      errorMessage: 'Password cannot be empty'
    }
  }
};
