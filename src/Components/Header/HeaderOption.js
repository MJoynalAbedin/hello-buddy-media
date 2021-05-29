import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOption.css'

const HeaderOption = ({Icon, title, avatar}) => {
    return (
        <div style={{color: 'gray'}} className="d-flex align-items-center flex-column ms-5">
            {Icon && <Icon className="headerOption-icon"></Icon>}
            {avatar && <Avatar className="headerOption-icon" src={avatar}/>}
            <h6 className="headerOption-title">{title}</h6>
        </div>
    );
};

export default HeaderOption;