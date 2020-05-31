import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import NotImplementedYet from "./NotImplementedYet";
import searchCustomers from "./searchCustomers";
import Customer from "./Customer";

class AppRoutes extends Component{

  render ()
  {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/search" exact component={searchCustomers}/>
            <Route path="/customer/:id" exact component={Customer}/>
            <Route path="/registration" exact component={Register}/>
            <Route path="/notImplementedYet" exact component={NotImplementedYet}/>
            <Route path="/impressum" exact component={NotImplementedYet}/>
        </BrowserRouter>
    );
  }
}

export default AppRoutes;
