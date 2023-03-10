import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../session";
import { IoMdPerson } from "react-icons/io";
import { NavLink, useHistory } from "react-router-dom";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = (e) => {
    if (showMenu) return;
    setShowMenu(true);
    e.currentTarget.classList.add('open');
  } 

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
      const button = document.getElementsByClassName('profile-nav-button open');
      button[0].classList.remove('open');
    }

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push(`/`);
  }

  return (
    <div className="nav-user" 
      style={{backgroundColor: showMenu ? "#6504b5" : "" , 
              color: showMenu ? "white" : ""
            }}
    >
      <button className="profile-nav-button" onClick={openMenu}>
          <IoMdPerson size={30}/>
          <p>&nbsp;&nbsp;{user.username}</p>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <NavLink exact to="/user/profile"><li>Profile</li></NavLink>
          <li><button onClick={logout}>Log Out</button></li>
        </ul>
      )}  
    </div>
  )
}

export default ProfileButton;