import React from 'react';
import { Link } from 'react-router-dom'
import { FiEye } from "react-icons/fi";

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
            <div id="page-remember-content" className="container">
            
            <div className="container-logo-password">
                <img className="logo" src={logoImg} alt="Proffy" />
                <h2>Sua plataforma de estudos online.</h2>
            </div>
        </div>
        </div>

    )
}

export default Password;