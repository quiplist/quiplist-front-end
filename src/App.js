import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Wheel from "./components/raffles/Wheel";
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    return (
      <Router>
        <div className="nav-wrapper">
          <div className="container-fluid py-2">
            <div className="row justify-content-between align-items-center">
              <div className="col col-lg-2">
                <a className="navbar-brand" href="/">
                  <img src="/img/logo.png" className="img-fluid" alt="logo" />
                </a>
              </div>
              <div className="col col-lg-10 text-end">
                <div className="name-wrapper">
                  <p>
                    Welcome,{" "}
                    <span className="loggedName" id="loggedName">
                      {" "}
                      Juan Dela Cruz
                    </span>
                  </p>
                </div>
                <Menu
                right isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}>
                    <Link to="/" onClick={() => this.closeMenu()}>Home</Link>
                    <Link to="/contact" onClick={() => this.closeMenu()}>Contact</Link>
                    <Link to="/login" onClick={() => this.closeMenu()}>Login</Link>
                    <Link to="/wheel" onClick={() => this.closeMenu()}>Wheel</Link>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/wheel" component={Wheel} />
        </Switch>
      </Router>
    );
  }
}

export default App;
