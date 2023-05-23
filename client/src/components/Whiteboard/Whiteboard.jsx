import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

function Whiteboard({ title }) {
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        {title}
      </div>
    </div>
  );
}

Whiteboard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Whiteboard;
