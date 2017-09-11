import React from 'react';
import { Link } from 'react-router-dom';

import styles from './_header.scss';

const Header = () => {
  return (
      <div className={styles.header}>
        <div className={styles.logo}></div>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to='/'>Home</Link>
          <Link className={styles.navLink} to='/about'>About</Link>
          <Link className={styles.navLink} to='/lists'>Lists</Link>
        </nav>
      </div>
  );
};

export default Header;
