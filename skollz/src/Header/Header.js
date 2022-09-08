import React from "react";
import profile from '../ICON/profile.svg';
import classes from './header.module.css';

const Header = () =>{
    return(
        <div className={classes.back}>
        <div className={classes.header}>
            <div>
                <h3>Logo</h3>
            </div>
            <div>
                <img  className={classes.icon} src={profile} alt="profile"/>

            </div>

        </div>
        </div>
    );

};
export default Header;