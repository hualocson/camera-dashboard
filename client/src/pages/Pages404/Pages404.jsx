import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

function Pages404() {
  return (
    <div className={styles.Container}>
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
}

export default Pages404;
