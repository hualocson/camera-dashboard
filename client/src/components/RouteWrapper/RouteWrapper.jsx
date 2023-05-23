import React from 'react';

import Header from './Header/Header';

import styles from './index.module.css';

function RouteWrapper(Component, title) {
  return (
    <>
      <div className={styles.Header}>
        <Header title={title} />
      </div>

      <div className={styles.Page}>
        <Component />
      </div>
    </>
  );
}

export default RouteWrapper;
