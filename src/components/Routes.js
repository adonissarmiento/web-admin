import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './Nav'
import Login from './Login';
import User from './User';
import Challenge from './Challenge'
import DisplayData from './DisplayData'

 class Routes extends Component {
   render () {
    return (
        <Switch>
            <Route path='/nav' component={Nav} />
        <Route path='/login' component={Login}/>
        <Route path='/user' component={User}/>

        <Route path='/challenge' component={Challenge}/>
        <Route path='/displaydata' component={DisplayData}/>
        </Switch>
    );
  }
}

export default Routes;