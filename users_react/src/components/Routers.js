import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Users} from './Users/Users';
import {Profile} from './Profile/Profile';


const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Users} />
                <Route exact path='/profile/:id' component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};


export { Routers };
