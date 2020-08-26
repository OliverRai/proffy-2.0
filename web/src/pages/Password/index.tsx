import React from 'react';
import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css'


function Password() {
    return (
        <div id="remmber-password">
            <header className="goBack">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
            </header>
            <div id="page-password-content" className="container">
                <div className="remember-pass">
                    <h1>Eita, esqueceu sua senha?</h1>
                    <p>Não se preocupe, damos um jeito nisso</p>
                    <form>
                        <input type="text" id="emailPassWordReset" placeholder="email"/>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="container-logo-pass">
                    <img className="logo" src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>
        </div>
    )
}

export default Password;