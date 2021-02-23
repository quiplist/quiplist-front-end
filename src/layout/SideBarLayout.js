import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../admin/Dashboard';
import Events from '../admin/Events';
import Users from '../admin/Users';
import FBStream from "../admin/FB Stream/FBStream";
import Profile from "../admin/Profile";
import View from '../admin/actions/View/View';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    BrowserView,
    MobileView
} from "react-device-detect";

class SideBarLayout extends React.Component{

    render (){
        return(
            <Router>
            <div>
                <div className="sidebar_wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2 px-0">
                                <div className="sidebar">
                                    <img src={window.location.origin + '/img/logo.png'} className="img-fluid mb-5" alt="logo"></img>
                                    <BrowserView>
                                    <ul>
                                        <li><Link to="/admin/dashboard" >Dashboard</Link></li>
                                        <li><Link to="/admin/events">Events</Link></li>
                                        <li><Link to="/admin/users">Users</Link></li>
                                        <li><Link to="/admin/fbstream">FB Live</Link></li>
                                        <li><Link to="/admin/profile">Profile</Link></li>
                                        <li><Link to="/admin">Logout</Link></li>
                                    </ul>
                                    </BrowserView>
                                    <MobileView>
                                    <ul className="px-2 sidebar-mobile_view text-center">
                                        <li ><Link to="/admin/dashboard" ><i className="fas fa-chart-bar"></i><span className="label w-100"> Dashboard</span></Link></li>
                                        <li><Link to="/admin/events"><i className="fas fa-calendar-alt"></i><span className="label w-100"> Events</span></Link></li>
                                        <li><Link to="/admin/users"><i className="fas fa-users"></i><span className="label w-100"> Users</span></Link></li>
                                        <li><Link to="/admin/fbstream"><i className="fas fa-file"></i><span className="label w-100"> FB Live</span></Link></li>
                                        <li><Link to="/admin"><i className="fas fa-sign-out-alt"></i><span className="label w-100"> Logout</span></Link></li>
                                    </ul>
                                    </MobileView>
                                </div>
                            </div>
                            <div className="col-10 content-wrapper px-0">
                                <div className="topbar">
                                    <div className="profile-wrapper text-end">
                                        <img src={window.location.origin + '/img/user.png'} className="img-fluid" alt="user"></img>
                                        <div className="name_wrapper text-start">
                                            <h2 className="user_name">Juan Dela Cruz</h2>
                                            <h3 className="user_title">Site Administrator</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="content pb-0">
                                    <div className="breadcrumbs_wrapper">
                                        <span>Home</span><span className="active">Dashboard</span>
                                    </div>
                                    <div className="content_wrapper pt-3">
                                        <Switch>
                                            <Route path="/admin/dashboard" component={Dashboard} />
                                            <Route path="/admin/events" component={Events} />
                                            <Route path="/admin/users" component={Users} />
                                            <Route path="/admin/event/view" component={View} />
                                            <Route path="/admin/fbstream" component={FBStream} />
                                            <Route path="/admin/profile" component={Profile} />
                                        </Switch>
                                    </div>
                                </div>
                                {/* <div className="footer">
                                    <p>©2020 Quiplist Events Production Inc. All rights reserved</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        );
    }
}

SideBarLayout.propTypes = {
    match: PropTypes.any.isRequired
}

export default SideBarLayout;