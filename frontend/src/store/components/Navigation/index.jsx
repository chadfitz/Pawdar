import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import ProfileButton from './ProfileButton';
import { GiDogHouse } from 'react-icons/gi';
import { IoIosPaw } from 'react-icons/io';
import './Navigation.css';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='user-info'>
          <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <div className='login-button'>
          <LoginFormModal />
        </div>
        <div className='signup-button'>
          <SignupFormModal />
        </div>
      </>
    );
  }

  return (
    <nav className='nav-bar'>
      <IoIosPaw className='site-logo'/>
      <div className='region--inner'>
        <div className='nav-left'>
          <div className='home-logo'>
            <NavLink exact to="/">
              <GiDogHouse size={40} />
            </NavLink>
          </div>
          <div><NavLink exact to="/organizations" className="nav-left-navlink">ORGANIZATIONS</NavLink></div>
        </div>
        <div className='nav-right'>
          <>
            {sessionLinks}
          </>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;