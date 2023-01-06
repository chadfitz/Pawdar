import React, { useState } from 'react';
import MeetAndGreetIndex from '../MeetAndGreet/MeetAndGreetIndex';
import './AboutMe.css';
import './MeetAndGreetIndex.css';
import './Favorites.css';
import './Recommended.css';
import './ProfilePage.css';

const ProfilePage = () => {
  const [showAboutMe, setShowAboutMe] = useState(true); 
  const [showMeetAndGreets, setShowMeetAndGreets] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showRecommended, setShowRecommended] = useState(false);
  
  const openAboutMe = e => {
    if (showAboutMe) return;
    setShowAboutMe(true);
    setShowMeetAndGreets(false);
    setShowFavorites(false);
    setShowRecommended(false);
  }

  const openMeetAndGreets = e => {
    if (showMeetAndGreets) return;
    setShowAboutMe(false);
    setShowMeetAndGreets(true);
    setShowFavorites(false);
    setShowRecommended(false);
  }

  const openFavorites = e => {
    if (showFavorites) return;
    setShowAboutMe(false);
    setShowMeetAndGreets(false);
    setShowFavorites(true);
    setShowRecommended(false);
  }

  const openRecommended = e => {
    if (showRecommended) return;
    setShowAboutMe(false);
    setShowMeetAndGreets(false);
    setShowFavorites(false);
    setShowRecommended(true);
  }


  return (
    <div role="main" className='main'>
      <div className='profile-container'>
        <div className='profile-content'>
          <div className='profile-header-container'>
            <h1 className='profile-header'>My Pawdar</h1>
            <ul className='profile-tabs'>
              <li onClick={openAboutMe}>About Me</li>
              <li onClick={openMeetAndGreets}>Meet & Greets</li>
              <li onClick={openFavorites}>Favorites</li>
              <li onClick={openRecommended}>Recommended</li>
            </ul>
          </div>
          <div className='profile-body'>
            <div className='about-me-content'>
              {showAboutMe && (
                <p>About Me Test</p>
              )}
            </div>
            <div className='meet-and-greet-index'>
              {showMeetAndGreets && (
                <MeetAndGreetIndex />
              )}
            </div>
            <div className='favorites-content'>
              {showFavorites && (
                <p>Favorites Test</p>
              )}
            </div>
            <div className='recommended-content'>
              {showRecommended && (
                <p>Recommended Test</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;