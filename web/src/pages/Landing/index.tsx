import React from 'react';

import './styles.css'
import '../../assets/styles/global.css'
import logoImg from '../../assets/images/logo.svg';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <div className="login-container">
                    <form>
                        <h2>Fazer Login</h2>
                            <div className="input-block">
                                <input type="text" name="email" id="email" placeholder="email"/>
                                <input type="password" name="password" id="password" placeholder="password"/>
                            </div>
                            <div className="lembrar">
                                <input type="checkbox" name="lembrarsenha" id="lembrarsenha"/>
                                <p>Lembrar-me</p>
                                <span>Esqueci minha senha</span>
                            </div>
                        <button className="btnLogin">Entrar</button>
                    </form>
                    <div className="footer">
                        <span>Não tem conta?</span>
                        <span>É de graça <img src={purpleHeartIcon} alt="Coração roxo"/></span> 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Landing;
