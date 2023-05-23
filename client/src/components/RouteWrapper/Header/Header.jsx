import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import { actionLogout } from 'store/actions';

import HeaderIcon from 'assets/Icons/HeaderIcon.png';

import styles from './index.module.css';

function Header({ title }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.User.user);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(actionLogout({ navigate }));
  };

  return (
    <div>
      <div className={styles.HeaderWrapper}>
        <div className={styles.HeaderTitleContainer}>
          <img className={styles.HeaderIcon} src={HeaderIcon} alt="icon" />

          <div className={styles.Title}>{title}</div>
        </div>

        <div className={styles.RightContainer}>
          <SearchRoundedIcon className={styles.Icon} />

          <NotificationsRoundedIcon className={styles.Icon} />

          <div className={styles.Divider} />

          <div className={styles.ProfileContainer}>
            {user.username}

            {user.avatar ? (
              <button
                type="button"
                onClick={toggleMenu}
                className={styles.DropDown}
              >
                <img src={user.avatar} alt="avatar" className={styles.Circle} />
              </button>
            ) : (
              <button
                type="button"
                onClick={toggleMenu}
                className={styles.DropDown}
              >
                <div className={styles.Circle} />
              </button>
            )}

            {isOpen && (
              <div className={styles.DropDownMenu}>
                <div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className={styles.LogoutButton}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
