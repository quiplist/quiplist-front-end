import React, { Component } from "react";
import { BrowserRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import BlankLayout from "./layout/BlankLayout";
import PrimaryLayout from "./layout/PrimaryLayout";
import SideBarLayout from "./layout/SideBarLayout";
class App extends Component {
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <PrimaryLayout {...props} /> } />
            <Route exact path="/randompicker" render={(props) => <BlankLayout/> } />
            <Route exact path="/randomnumber" render={(props) => <BlankLayout/> } />
            <Route exact path="/wheel" render={(props) => <BlankLayout/> } />
            <Route exact path="/admin" render={(props) => <BlankLayout {...props} /> } />
            <Route exact path="/admin/fbstream" render={(props) => <SideBarLayout {...props}/> } />
            <Route exact path="/admin/dashboard" render={(props) => <SideBarLayout {...props}/> } />
            <Route exact path="/admin/events" render={(props) => <SideBarLayout {...props}/> } />
            <Route exact path="/admin/users" render={(props) => <SideBarLayout {...props}/> } />
            <Route exact path="/admin/pages" render={(props) => <SideBarLayout {...props}/> } />
            <Route exact path="/admin/create-event" render={(props) => <SideBarLayout {...props}/> } />
            <Route exact path="/admin/event/view" render={(props) => <SideBarLayout {...props}/> } />
           </Switch>
        </BrowserRouter>
      </div>
    )
 }
}

export default App;
