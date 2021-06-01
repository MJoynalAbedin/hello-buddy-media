import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import profile from '../../images/doctor-sm.png';

const Sidebar = () => {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={profile} alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Abdur Rahim</h2>
                <h4>rahimvi414@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>My Buddy </p>
                    <p className="sidebar__statNumber">10</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">4</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                    {recentItem('Recent Activity')}
                    {recentItem('You liked a post')}
                    {recentItem('You are now friend with Onim')}
                    {recentItem('You changed your password')}
                    {recentItem('You have a new comment')}
            </div>
        </div>
    );
};

export default Sidebar;