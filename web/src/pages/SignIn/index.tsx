
import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiEye } from "react-icons/fi";

import './styles.css'
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import api from '../../services/api';
import { sign } from 'crypto';


function SignIn() {
    
        const history = useHistory();
    
        const [username,setUsername] = useState('')
        const [lastName,setLastName] = useState('')
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
    
        function handleCreateAccount(e: FormEvent){
            e.preventDefault();
    
            api.post('accounts', {
                username,
                lastName,
                email,
                password,
            }).then(() => {
                alert('All done!');
                history.push('/sucess');
            }).catch(() =>{
                alert('Error');
            })
        }

    
    return (
        <div id="page-sign-in">
            <header className="goBack">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                </header>
            <div id="page-signIn-content" className="container">
                <div className="cadUser-container">
                    <form onSubmit={handleCreateAccount}>
                        <div className="title">
                            <h1>Cadastro</h1>
                            <h2>Preencha os dados abaixo para começar</h2>
                        </div>
                        <div className="input-block">
                            <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Nome" 
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }} 
                            />
                            <input 
                            type="text" 
                            name="sobrenome" 
                            id="sobrenome" 
                            placeholder="Sobrenome"
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }} 
                             />
                            <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} 
                            />
                            <input 
                            type="password" 
                            name="senha" 
                            id="senha" 
                            placeholder="Senha" 
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} 
                            />
                            <i className="eyes"><FiEye /></i>
                        </div>
                            <button type="submit"  className="btn-cadastrar">Concluir cadastro</button>
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