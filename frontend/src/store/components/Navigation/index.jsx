import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import ProfileButton from './ProfileButton';
import { GiDogHouse } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='user-info'>
          <ProfileButton user={sessionUser} />
          {/* <p>{sessionUser.username.toUpperCase()}</p> */}
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

  // let favoriteLink;
  // if (sessionUser) {
  //   favoriteLink = (

  //   )
  // }

  return (
    <nav className='nav-bar'>
      <div className='region--inner'>
        <div className='nav-left'>
          <div className='home-logo'>
            <NavLink exact to="/">
              <GiDogHouse size={40} />
            </NavLink>
          </div>
          <div>BREEDS</div> {/* NavLink */}
          <div>RESOURCES</div> {/* NavLink */}
        </div>
        <div className='nav-right'>
          <div className='nav-favorite'>
            {/* NavLink to favorites if logged in */}
              <FaHeart size={30}/>
            {/* otherwise link to sign-up */}
          </div>
          <div className='nav-user'>
            {sessionLinks}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;