import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from '../actions/authActions'; // Import the logout action


function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navs = useNavigate()
  const handleLogoutClick = () => {
    // Dispatch the logout action when the user clicks the logout button
    dispatch(logout());
    navs("/")
  };

  return (
    <div className="navbar">
      <div className="nav-logo">App Logo</div>
      <NavLink to={`/`}>
        Home
      </NavLink>
      <NavLink to={`/my-novels`}>
        My Novels
      </NavLink>
      <NavLink to={`/publishers`}>
        My Publishers
      </NavLink>
      <NavLink to={`/translators`}>
        My Translators
      </NavLink>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default NavBar;
