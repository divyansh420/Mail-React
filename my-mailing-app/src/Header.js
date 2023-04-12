import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <img className='header-menu' src='https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-4.jpg'
            alt=''>
        </img>
        <p className='header-ptag'> Outlook</p>
        <input className='header-search-glass' type='text' placeholder='Search'></input>
        <img 
            className='header-avatar'
            src='https://pbs.twimg.com/media/FTSn3n7WIAIL7a-.jpg:large'
            alt=''
        />
    </div>
  )
}

export default Header