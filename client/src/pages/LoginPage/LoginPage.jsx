import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { actionLogin } from 'store/actions';

import LOCATIONS, {
  EMAIL_REGEX, TEXT_LENGTH_LIMIT,
} from 'constants/index';

import unsee from 'assets/Icons/invisible.png';
import see from 'assets/Icons/eye.png';

import styles from './index.module.css';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('token');
  const loading = useSelector((state) => state.Login.loading);

  const [showPassword, setShowPassword] = useState(false);

  const onToggleShowPassWord = () => {
    setShowPassword(!showPassword);
  };

  const callbackLoginSuccess = useCallback(() => {
    navigate(LOCATIONS.HOME);
  }, [navigate]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .required('Email không được bỏ trống.')
        .matches(EMAIL_REGEX, 'Email không hợp lệ'),
      password: Yup.string()
        .trim()
        .required('Mật khẩu không được bỏ trống.')
        .min(TEXT_LENGTH_LIMIT.PASSWORD, 'Mật khẩu không được ít hơn 6 kí tự')
        .max(TEXT_LENGTH_LIMIT.SHORT, `Mật khẩu không được vượt quá ${TEXT_LENGTH_LIMIT.SHORT} kí tự`),
    }),

    onSubmit: (values) => {
      dispatch(actionLogin({ values, callback: callbackLoginSuccess }));
    },
  });

  useEffect(() => {
    if (accessToken) {
      navigate(LOCATIONS.HOME);
    }
  }, [accessToken]);

  return (
    <div className={styles.Container}>
      <div className={styles.Card}>
        <div className={styles.Logo}>
          LOGO
        </div>

        <div className={styles.TopContainer}>
          <div className={styles.SubTitle1}>
            Camera Dashboard
          </div>

          <div className={styles.Title}>
            Log In
          </div>

          <div className={styles.SubTitle2}>
            Enter your email and password below
          </div>
        </div>

        <form className={styles.Form} onSubmit={validation.handleSubmit}>
          <label htmlFor="email" className={styles.Label}>EMAIL</label>

          <div className={styles.EmailContainer}>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.email || ''}
              className={styles.Input}
            />

            {validation.touched.email && validation.errors.email
              ? <div className={styles.Errors}>{validation.errors.email}</div>
              : null}
          </div>

          <label htmlFor="password" className={styles.LabelContainer}>
            <div className={styles.Label}>PASSWORD</div>

            <button type="button" className={styles.Label1}>Forgot password?</button>
          </label>

          <div className={styles.PasswordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.password || ''}
              className={styles.Input}
            />

            {validation.touched.password && validation.errors.password
              ? <div className={styles.Errors}>{validation.errors.password}</div>
              : null}

            <button
              type="button"
              className={styles.Unsee}
              onClick={onToggleShowPassWord}
            >
              {showPassword ? (
                <img
                  src={see}
                  alt="see"
                />
              ) : (
                <img
                  src={unsee}
                  alt="unsee"
                />
              )}

            </button>
          </div>

          {loading ? (
            <button type="submit" className={styles.Button} disabled>
              <div className={styles.Loader} />
            </button>
          ) : (
            <button type="submit" className={styles.Button}>
              Log In
            </button>
          )}
        </form>

        <div>
          Need help?
          {' '}
          <Link to="../" className={styles.Link}>Contact support</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
