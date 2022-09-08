 import React from "react";
 import classes from './sidebar.module.css';
 import noti from '../ICON/notification.svg';
 import pay from '../ICON/pay.svg';
 import fee from '../ICON/fee.svg';
 import student  from '../ICON/student.svg';
 import dash from '../ICON/dash.svg';
 import staff from '../ICON/staffdetails.svg';
 
 
  
 import profile from '../ICON/profile.svg';

 const Sidebar = ()=>{
    return(

        <div>


        <div className={classes.sidebar}>
            
            <div>
                <img  className={classes.icon}   src={profile} alt="profile"/>
            </div>
            <div className={classes.sidebar_profile}>
                <h4>Edit Profile</h4>
            </div>
        </div>

        <div className={classes.sidebar_details}>

            <ul>
                <li className={classes.list}>
                    <img src={dash} alt="dash" className={classes.icon2}/>
                    <a href="#"> Dashboard</a>
                </li>
                <li className={classes.list}>
                    <img  src={fee} alt="fee" className={classes.icon2}/>
                    <a href="#"> Fee Details</a>
                </li>
                <li className={classes.list}>
                    <img src={staff} alt="staffdetails" className={classes.icon2}/>
                    <a href="#"> Staff Details</a>
                    </li>
                <div>
                    <ul>
                    <li className={classes.list2}>Viewdetails</li>
                    <li className={classes.list2}>Pay History</li>
                    <li className={classes.list2}>Add staff</li>
                    </ul>
                </div>


                <li className={classes.list}>
                    <img src={student} alt="student" className={classes.icon2}/>
                    <a href="#">Student Details</a>
                    
                        
                        
                        
                    
                </li>
                <li className={classes.list}>
                    <img src={pay} alt="pay" className={classes.icon2}/>
                    <a href="#"> Pay salary</a>
                </li>
                <li className={classes.list}>
                    <img  src={noti} alt="notification" className={classes.icon2}/>
                    <a href="#"> Notices</a>
                </li>
                <li className={classes.list}>
                    <img src={profile} alt= "profile" className={classes.icon2}/>
                    <a href="#"> School Profile</a>
                </li>
            </ul>



        </div>

        <div className={classes.logout}>
            <p>Logout</p>
        </div>


        </div>
    );

 };
 export default Sidebar;