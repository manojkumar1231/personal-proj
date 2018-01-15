import { SubmissionError } from 'redux-form';
import cookie from 'js-cookie';

const LOAD = 'redux-example/auth/LOAD';
const LOAD_SUCCESS = 'redux-example/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/auth/LOAD_FAIL';
const LOGIN = 'redux-example/auth/LOGIN';
const LOGIN_SUCCESS = 'redux-example/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'redux-example/auth/LOGIN_FAIL';
const REGISTER = 'redux-example/auth/REGISTER';
const REGISTER_SUCCESS = 'redux-example/auth/REGISTER_SUCCESS';
const REGISTER_FAIL = 'redux-example/auth/REGISTER_FAIL';
const LOGOUT = 'redux-example/auth/LOGOUT';
const LOGOUT_SUCCESS = 'redux-example/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'redux-example/auth/LOGOUT_FAIL';
const SAVE_USER = 'redux-example/auth/SAVE_USER';
const SAVE_USER_SUCCESS = 'redux-example/auth/SAVE_USER_SUCCESS';
const SAVE_USER_FAIL = 'redux-example/auth/SAVE_USER_FAIL';

const initialState = {
  loaded: false,
  user: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        accessToken: action.result.accessToken,
        user: action.result.user
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loaded: true,
        accessToken: action.result.token,
        user: action.result.user
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        loginError: action.error
      };
    case REGISTER:
      return {
        ...state,
        registeringIn: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registeringIn: false,
        registerUser: action.result.user
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registeringIn: false,
        registerError: action.error
      };
    case LOGOUT:
      document.cookie = `authorization=;expires= ${new Date(0)}`;
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        accessToken: null,
        user: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };

    case SAVE_USER:
      return {
        ...state,
        savingUser: true
      };
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        savingUser: false,
        loaded: true,
        user: action.result.user
      };
    case SAVE_USER_FAIL:
      return {
        ...state,
        savingUser: false,
        saving: false,
        saveError: action.error
      };
    default:
      return state;
  }
}

const catchValidation = error => {
  if (error.message) {
    if (error.message === 'Validation failed' && error.data) {
      throw new SubmissionError(error.data);
    }
    throw new SubmissionError({ _error: error.message });
  }
  return Promise.reject(error);
};

function setCookie() {
  return async response => {
    // const payload = await app.passport.verifyJWT(response.accessToken);
    // const options = payload.exp ? { expires: new Date(payload.exp * 1000) } : undefined;
    console.log('response', response);
    cookie.set('feathers-jwt', response.token);
  };
}

function setToken({ app }) {
  return response => {
    response.accessToken = response.token;
    const { accessToken } = response;
    console.log('accessToken', accessToken);
    console.log('response', response);
    app.set('accessToken', accessToken);
    // restApp.set('accessToken', accessToken);
    // client.setJwtToken(accessToken);
  };
}

function setUser({ app, restApp }) {
  return response => {
    app.set('user', response.user);
    restApp.set('user', response.user);
  };
}

/*
* Actions
* * * * */

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: async ({ app, restApp, client }) => {
      const response = await restApp.authenticate();
      // await setCookie({ app })(response);
      setToken({ client, app, restApp })(response);
      setUser({ app, restApp })(response);
      return response;
    }
  };
}

export function register(data) {
  return {
    types: [REGISTER, REGISTER_SUCCESS, REGISTER_FAIL],
    promise: ({ client }) => client.post(
      '/api/user/register',
      data
    )
  };
}

export function login(strategy, data) {
  console.log('data', data);
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    // promise: async ({ client }) => client.post('/api/user/login', data
    // ).then(() =>
    //   try {
    //     let response = await
    //     console.log('response', JSON.parse(response.accessToken));
    //     response = JSON.parse(response.accessToken);
    //     await setCookie({ app })(response);
    //     setToken({ client, app, restApp })(response);
    //     setUser({ app, restApp })(response);
    //     return response;
    //   }).catch (error) {
    //     if (strategy === 'local') {
    //       return catchValidation(error);
    //     }
    //     throw error;
    //   }
    // }
    promise: async ({ client, app }) => {
      try {
        const response = await client.post('/api/user/login', data);
        const userObj = JSON.parse(response.accessToken);
        await setCookie({ app })(userObj);
        // await setToken({ client, app })(userObj);
        // setUser({ restApp })(response);
        return userObj;
      } catch (error) {
        console.log('=======error===========', error);
        if (strategy === 'local') {
          return catchValidation(error);
        }
        throw error;
      }
    }
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: ({ client }) => client.post('/api/logout')
  };
}

export function saveUser(data) {
  return {
    types: [SAVE_USER, SAVE_USER_SUCCESS, SAVE_USER_FAIL],
    promise: ({ client }) => client.post('/api/user', data)
  };
}
