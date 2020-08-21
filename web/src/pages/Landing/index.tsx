import React from 'react';
import { Link } from 'react-router-dom'
import { FiEye } from "react-icons/fi";

import './styles.css'
import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img className="logo" src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <div className="login-container">
                    <form>
                        <h2>Fazer Login</h2>
                        <div className="input-block">
                            <input type="text" name="text" id="text" placeholder="Email" />
                            <input type="password" name="password" id="password" placeholder="Password" />
                           <i className="eyes"><FiEye/></i>
                        </div>
                        <div className="lembrar">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" aria-label="Checkbox for following text input" />
                                        <label htmlFor=""> Lembre-me</label>
                                    </div>
                                </div>
                            </div>
                            <span>Esqueci minha senha</span>
                        </div>
                        <button className="btnLogin">Entrar</button>
                        <div id="footer">
                            <p>Não tem conta?</p>
                            <span>É de graça <img src={purpleHeartIcon} alt="Coração roxo" /></span>
                        </div>
                        <div className="sign">
                            <p>
                                <Link className="cadUser" to="/singIn"> Cadastre-se </Link>
                            </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )

}

export default Landing;
