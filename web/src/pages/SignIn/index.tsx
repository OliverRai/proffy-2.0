import React from 'react';

import { Link } from 'react-router-dom'
import { FiEye } from "react-icons/fi";

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';


import './styles.css';

function SignIn() {
    return (
        <div id="page-sign-in">
            <header className="goBack">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                </header>
            <div id="page-signIn-content" className="container">
                <div className="cadUser-container">
                    <form>
                        <div className="title">
                            <h1>Cadastro</h1>
                            <h2>Preencha os dados abaixo para começar</h2>
                        </div>
                        <div className="input-block">
                            <input type="text" name="name" id="name" placeholder="Nome" />
                            <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" />
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <input type="password" name="senha" id="senha" placeholder="Senha" />
                            <i className="eyes"><FiEye /></i>
                        </div>
                            <button className="btn-cadastrar">Concluir cadastro</button>
                    </form>
                </div>
                <div className="container-logo">
                    <img className="logo" src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>
        </div>
    )
}

export default SignIn;