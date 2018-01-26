import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './_header.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}></div>
      <nav className={styles.nav}>
        <NavLink className={styles.navLink} exact activeClassName={styles.active} to='/'>Home</NavLink>
        <NavLink className={styles.navLink} activeClassName={styles.active} to='/about'>About</NavLink>
        <NavLink className={styles.navLink} activeClassName={styles.active} to='/lists'>Lists</NavLink>
      </nav>
    </div>
  );
};

export default Header;
