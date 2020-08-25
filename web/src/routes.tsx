import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import Password from './pages/Password';
import Sucess from './pages/SucessRegister';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/singIn" component={SignIn} />
            <Route path="/sucess" component={Sucess}/>
            <Route path="/password" component={Password}/>
        </BrowserRouter>
    )
}

export default Routes;