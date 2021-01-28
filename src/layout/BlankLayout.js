import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import RandomPicker from "../components/raffles/RandomPicker";
import RandomNumber from "../components/raffles/RandomNumber";
import Wheel from "../components/raffles/Wheel";
import Admin from "../admin/Admin";

class BlankLayout extends React.Component {
    render () {
        return (
            <Switch>
                <Route exact path="/randomnumber" render={(props) => <RandomNumber {...props} /> }/>
                <Route exact path="/randompicker" render={(props) => <RandomPicker {...props} /> }/>
                <Route exact path="/wheel" render={(props) => <Wheel {...props} /> }/>
                <Route exact path="/admin" render={(props) => <Admin {...props} /> }/>
            </Switch>
        );
    }
}

export default BlankLayout;