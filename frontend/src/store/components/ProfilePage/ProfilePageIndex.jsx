import React from 'react';
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
              <li>Meet & Greet</li>
              <li>Favorites</li>
              <li>Recommended</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;