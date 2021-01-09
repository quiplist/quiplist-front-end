import React, { Component } from "react";
import { BrowserRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import BlankLayout from "./layout/BlankLayout";
import PrimaryLayout from "./layout/PrimaryLayout";
class App extends Component {
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <PrimaryLayout {...props} /> } />
            <Route exact path="/randompicker" render={(props) => <BlankLayout/> } />
            <Route exact path="/admin/login" render={(props) => <BlankLayout {...props} /> } />
            <Route exact path="/admin/dashboard" render={(props) => <BlankLayout/> } />
           </Switch>
        </BrowserRouter>
      </div>
    )
 }
}

export default App;
