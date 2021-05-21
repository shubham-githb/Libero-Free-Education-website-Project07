import React from 'react'
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from  "@material-ui/icons/Search";
import VideoCallIcon from  "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    return (
        <div className="header">
          <div className="header__left">
              <MenuIcon />
              <img  
                className = "header__logo" 
                src="https://logos-world.net/wp-content/uploads/2020/11/Libero-Logo-700x394.png" 
                alt=""
              />
          </div>

          <div className="header__input">
            <input placeholder="Search Courses" type="text" />
            <SearchIcon className="header__inputButton" />
          </div>

          <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar alt=" " src="https://avatars.githubusercontent.com/u/72751187?v=4"/>
          </div>
          
        </div>
    );
}

export default Header
