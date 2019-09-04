import React, { PureComponent } from 'react';
import Logo from '../../components/Logo/Logo';
import './Header.scss';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <Logo />
      </header>
    );
  }
}

export default Header;
