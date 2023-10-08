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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container-fluid'>
        <div className="navbar-brand">NovelShelf</div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li class="nav-item">
              <NavLink className={'nav-link'} to={`/`}>
                Home
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink className={'nav-link'} to={`/my-novels`}>
                My Novels
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink className={'nav-link'} to={`/publishers`}>
                My Publishers
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink className={'nav-link'} to={`/translators`}>
                My Translators
              </NavLink>
            </li>

          </ul>
        <button class="btn btn-outline-success my-2 my-sm-0 custom-blue-button" onClick={handleLogoutClick}>Logout</button>
      </div>
    </nav>
  );
}

export default NavBar;
