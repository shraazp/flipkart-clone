/* eslint-disable no-unused-vars */
/**
 * Login dialog page to log into the application.
 * Opens as a dialog component
 * @author:Shravya P
 */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Login.scss';
import TextField from '@mui/material/TextField';
import useForm from '../../utils/useForm';
import validate from '../../utils/LoginFormValidationRules';
import { LoginAPI } from '../../services/LoginService';
import { loginStatus } from '../../actions/categoryActions';

export default function Login({ openLogin, setOpenLogin, setOpenSignUp }) {
  const dispatch = useDispatch();
  const handleLogin = () => LoginAPI(values.email, values.password).then(() => {
    setOpenLogin(false);
    dispatch(loginStatus(true));
  }).catch();
  const loginHandle = () => {
  };
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(loginHandle, validate);
  const handleOpen = () => {
    setOpenLogin(false);
  };
  const handleSignUp = () => {
    setOpenLogin(false);
    setOpenSignUp(true);
  };
  return (
    openLogin ? (
      <div className="signIn-container">
        <div className="login-container">
          <button type="button" className="x-mark" onClick={() => { handleOpen(); }}>✕</button>
          <div className="login-dialog">
            <div className="login">
              <div className="column-1">
                <span className="title"><span>Login</span></span>
                <p className="message">
                  <span>Get access to your Orders, Wishlist and Recommendations</span>
                </p>
              </div>
              <div className="column-2">
                <div>
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="email-container">
                      <TextField
                        id="email-box"
                        className="email"
                        label="Enter Email/Mobile number"
                        helperText={errors.email}
                        error={
                          !!errors.email
                      }
                        variant="standard"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email || ''}
                        required
                      />
                    </div>
                    <div className="password-container">
                      <TextField
                        id="password-box"
                        className="password"
                        label="Enter Password"
                        helperText={errors.password}
                        error={
                          !!errors.password
                      }
                        variant="standard"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password || ''}
                        required
                      />
                      <a
                        className="forgot"
                        href="/forgot"
                        tabIndex="-1"
                      >
                        <span>Forgot?</span>
                      </a
                >
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
                      <button className="Login-button" type="submit" onClick={handleLogin}>
                        <span>Login</span>
                      </button>
                    </div>
                    <div className="otp-container">
                      <div className="or">OR</div>
                      <button type="submit" className="otp">Request OTP</button>
                    </div>
                    <div className="sign-up-page" onClick={() => { handleSignUp(); }}>
                      <div
                        className="sign-up"
                      >
                        New to Flipkart? Create an account
                      </div>
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
Login.propTypes = {
  openLogin: PropTypes.bool,
  setOpenLogin: PropTypes.func,
  setOpenSignUp: PropTypes.func,
};
Login.defaultProps = {
  openLogin: false,
  setOpenLogin: function name() {
  },
  setOpenSignUp: function name() {
  },
};
