import React from 'react';
import ColoredFooter from "../layout/ColoredFooter";

class Admin extends React.Component{
    render (){
        return(
            <div>
                <div id="admin-login__wrapper" className="container-fluid py-5">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 col-lg-5">
                            <img className="img-fluid" src="../img/logo.png" alt="logo"></img>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col col-sm-6 col-lg-4">
                            <form className="login_form">
                                <div className="mb-1 text-start">
                                    <p>Please login to continue...</p>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="username" placeholder="Username/Email"/>
                                </div>
                                <div className="mb-1">
                                    <input type="password" className="form-control" id="userPassword" placeholder="Password"/>
                                </div>
                                <div className="login_form-btn-wrapper">
                                    <button type="submit" className="btn btn-login">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ColoredFooter/>
            </div>
        );
    }
}

export default Admin;