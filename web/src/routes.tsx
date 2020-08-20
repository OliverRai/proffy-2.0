import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/singIn" component={SignIn} />
        </BrowserRouter>
    )
}

export default Routes;