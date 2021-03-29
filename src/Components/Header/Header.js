import React from 'react';
import './Header.css';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Logo from '../../assets/robinhood.svg';
function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={Logo} width={25} alt='robinhood logo' />
      </div>
      <div className='header__search'>
        <div className='header__searchContainer'>
          <SearchOutlined />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div className='header__menuItems'>
        <a href='/'>Free Stocks</a>
        <a href='/'>PortFolio</a>
        <a href='/'>Cash</a>
        <a href='/'>Messages</a>
        <a href='/'>Account</a>
      </div>
    </div>
  );
}

export default Header;
