import React from 'react';
import "./header.css";
import NetflixLogo from '../../assets/images/NetflixLogo.png'; // Ensure the path is correct
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNone'; // Adjust if you need a diff
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBox'; // Adjust if you need a different icon
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDown'; // Adjust if you need a different icon



const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img
                src={NetflixLogo}
                className="nav_logo"
                alt="Netflix logo"
                width="100"
              />
              Netflix
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li><SearchRoundedIcon /></li>
            <li><NotificationsNoneRoundedIcon /></li>
            <li><AccountBoxRoundedIcon /></li>
            <li><ArrowDropDownRoundedIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;