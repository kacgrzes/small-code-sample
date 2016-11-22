import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import logo from 'assets/logo.svg';
import LanguageDropdown from 'modules/i18n/containers/LanguageDropdown/LanguageDropdown';
import style from './Navbar.scss';

const Navbar = () => (
  <nav className={'pt-navbar'}>
    <div className={'pt-navbar-group pt-align-left'}>
      <div className={'pt-navbar-heading'}>
        <img className={style.Logo} src={logo} alt="logo"/>
      </div>
      <IndexLink to="/" activeClassName={style.ActiveLink}>
        <button className={'pt-button pt-minimal pt-icon-home'}>Home</button>
      </IndexLink>
      <Link to="/demo" activeClassName={style.ActiveLink}>
        <button className={'pt-button pt-minimal pt-icon-table'}>Demo</button>
      </Link>
    </div>
    <div className={'pt-navbar-group pt-align-right'}>
      <LanguageDropdown />
    </div>
  </nav>
);

export default Navbar;
