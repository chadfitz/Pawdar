import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MeetAndGreetIndex from '../MeetAndGreet/MeetAndGreetIndex';
import FavoriteIndex from '../Favorite/FavoriteIndex';
import './AboutMe.css';
import './ProfilePage.css';

const ProfilePage = () => {
  const sessionUser = useSelector(state => state.session.user)

  const [showAboutMe, setShowAboutMe] = useState(true); 
  const [showMeetAndGreets, setShowMeetAndGreets] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  
  const openAboutMe = e => {
    if (showAboutMe) return;
    const tab = document.getElementsByClassName('open-tab');
    tab[0].classList.remove('open-tab');

    setShowAboutMe(true);
    e.currentTarget.classList.add('open-tab');
    setShowMeetAndGreets(false);
    setShowFavorites(false);
  }

  const openMeetAndGreets = e => {
    if (showMeetAndGreets) return;
    const tab = document.getElementsByClassName('open-tab');
    tab[0].classList.remove('open-tab');

    setShowAboutMe(false);
    setShowMeetAndGreets(true);
    e.currentTarget.classList.add('open-tab');
    setShowFavorites(false);
  }

  const openFavorites = e => {
    if (showFavorites) return;
    const tab = document.getElementsByClassName('open-tab');
    tab[0].classList.remove('open-tab');

    setShowAboutMe(false);
    setShowMeetAndGreets(false);
    setShowFavorites(true);
    e.currentTarget.classList.add('open-tab');
  }

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  

  return (
    <div role="main" className='main'>
      <div className='profile-container'>
        <div className='profile-content'>
          <div className='profile-header-container'>
            <h1 className='profile-header'>My Pawdar</h1>
            <ul className='profile-tabs'>
              <li className='about-me-tab open-tab' onClick={openAboutMe}>About Me</li>
              <li className='meet-and-greets-tab' onClick={openMeetAndGreets}>Meet & Greets</li>
              <li className='favorites-tab' onClick={openFavorites}>Favorites</li>
            </ul>
          </div>
          <div className='profile-body'>
            <div className='about-me-content'>
              {showAboutMe && (
                <>
                  <div className='about-me-key-container'>
                    <p className='about-me-key'>Username:&nbsp;</p>
                    <p className='about-me-username'>{sessionUser.username}</p>
                  </div>
                  <div className='about-me-key-container'>
                    <p className='about-me-key'>Email:&nbsp;</p>
                    <p className='about-me-email'>{sessionUser.email}</p>
                  </div>
                </>
              )}
            </div>
            <div className='meet-and-greet-index'>
              {showMeetAndGreets && (
                <MeetAndGreetIndex />
              )}
            </div>
            <div className='favorites-content'>
              {showFavorites && (
                <FavoriteIndex />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;