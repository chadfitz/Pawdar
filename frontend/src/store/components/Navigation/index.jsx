import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { GiDogHouse } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='session-links'>
          <ProfileButton user={sessionUser} />
          <p>{sessionUser.username.toUpperCase()}</p>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
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
          <div>
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