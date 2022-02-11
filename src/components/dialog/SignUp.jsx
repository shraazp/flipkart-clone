/**
 * Register page for the application
 * @author:Shravya P
 */
/* eslint-disable no-use-before-define */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Login.scss';
import TextField from '@mui/material/TextField';
import useForm from '../../utils/useForm';
import validate from '../../utils/LoginFormValidationRules';
import { SignUpAPI } from '../../services/LoginService';
import { loginStatus } from '../../actions/categoryActions';

export default function SignUp({ openSignUp, setOpenSignUp, setOpenLogin }) {
  const dispatch = useDispatch();
  const handleSignUp = () => {
    SignUpAPI(values.email, values.password).then(() => {
      dispatch(loginStatus(true));
      setOpenSignUp(false);
    }).catch();
  };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(handleSignUp, validate);
  const handleOpen = () => {
    setOpenSignUp(false);
  };
  const handleLogin = () => {
    setOpenSignUp(false);
    setOpenLogin(true);
  };
  return (
    openSignUp ? (
      <div className="signIn-container" tabIndex="-1">
        <div className="login-container">
          <button type="button" className="x-mark" onClick={() => { handleOpen(); }}>✕</button>
          <div className="login-dialog">
            <div className="login">
              <div className="column-1">
                <span className="title"><span>Looks like you&apos;re new here!</span></span>
                <p className="message">
                  <span>Sign up with your mobile number to get started</span>
                </p>
              </div>
              <div className="column-2">
                <div>
                  <form autoComplete="on" onSubmit={handleSubmit} noValidate>
                    <div className="email-container">
                      <TextField
                        className="email"
                        label="Enter Email/Mobile number"
                        helperText={errors.email}
                        variant="standard"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email || ''}
                        required
                      />
                      <span className="under" />
                    </div>
                    <div className="password-container">
                      <TextField
                        className="password"
                        label="Enter Password"
                        helperText={errors.password}
                        variant="standard"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password || ''}
                        required
                      />
                      <span className="under" />
                    </div>
                    <div className="agree-button">
                      By continuing, you agree to Flipkart&apos;s&nbsp;
                      <a
                        className="terms-button"
                        target="_blank"
                        href="/pages/terms"
                      >
                        Terms of Use&nbsp;

                      </a
                >
                      and&nbsp;
                      <a
                        className="privacy-policy"
                        target="_blank"
                        href="/pages/privacypolicy"
                      >
                        Privacy Policy

                      </a
                >
                      .
                    </div>
                    <div className="Login-button-container">
                      <button className="Login-button" type="submit">
                        <span>Signup</span>
                      </button>
                    </div>
                    <div className="otp-container">
                      <button type="submit" className="otp" onClick={() => { handleLogin(); }}>Existing User? Log in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
}
SignUp.propTypes = {
  openSignUp: PropTypes.bool,
  setOpenSignUp: PropTypes.func,
  setOpenLogin: PropTypes.func,
};
SignUp.defaultProps = {
  openSignUp: false,
  setOpenLogin: function name() {
  },
  setOpenSignUp: function name() {
  },
};
