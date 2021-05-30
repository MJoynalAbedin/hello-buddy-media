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
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,544</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,445</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                    {recentItem('reactJss')}
                    {recentItem('programming')}
                    {recentItem('softwareEngineering')}
                    {recentItem('design')}
                    {recentItem('developer')}
            </div>
        </div>
    );
};

export default Sidebar;