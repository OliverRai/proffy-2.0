import React from 'react';

import chekIcon from '../../assets/images/icons/success-check-icon.svg';
import './styles.css';
import { Link } from 'react-router-dom';

function Success(){
    return(
        <div id="success-register">
            <div id="success-content" className="container">
                <img src={chekIcon} alt=""/>
                <h1>Cadastro concluído</h1>
                <p>Agora você faz parte da plataforma Proffy <br/>
                    Tenha uma ótima experiência.
                </p> 
                <Link to="/">
                    <button type="button" className="login">Fazer login</button>
                </Link>
            </div>
        </div>
    )
}

export default Success;