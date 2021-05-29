import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


const Header = () => {
    return (
        <div className="header d-flex align-items-center justify-content-evenly">
            <h3 style={{fontFamily: 'san sarif'}} className="logo">Buddy Media</h3>
            <div className="header-right d-flex">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="Buddies"/>
                <HeaderOption Icon={ChatIcon} title='Messages' />
                <HeaderOption Icon={NotificationsActiveIcon} title="Notifications"/>
                <HeaderOption avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9YcCIpXEL-m3QPsL2RrTFN74klqcR9oqpA&usqp=CAU" title="Me"/>
            </div>
            <div className="header-left d-flex align-items-center">
                <SearchIcon/>
                <input placeholder="  Search someting..." type="text" />
            </div>
        </div>
    );
};

export default Header;