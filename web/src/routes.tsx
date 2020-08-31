import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import Password from './pages/Password';
import Sucess from './pages/SucessRegister';
import Home from './pages/Home';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/singIn" component={SignIn} />
            <Route path="/success" component={Sucess}/>
            <Route path="/password" component={Password}/>
            <Route path="/home" component={Home}/>
        </BrowserRouter>
    )
}

export default Routes;