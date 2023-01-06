import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './ProfilePage.css';

const ProfilePage = () => {
  // const sessionUser = useSelector(state => state.session.user);


  return (
    <div role="main" className='main'>
      <div className='profile-container'>
        <div className='profile-content'>
          <div className='profile-header-container'>
            <h1 className='profile-header'>My Pawdar</h1>
            <ul className='profile-tabs'>
              <li>About Me</li>
              <NavLink to="/user/profile/meetAndGreets"><li>Meet & Greets</li></NavLink>
              <li>Favorites</li>
              <li>Recommended</li>
            </ul>
          </div>
          <div className='profile-body'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;