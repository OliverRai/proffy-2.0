import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import sairIcon from '../../assets/images/icons/sair.svg';
import logoImg from '../../assets/images/logo.svg';
import homeImg from '../../assets/images/landing.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';


function Home() {
    return (
        <div id="page-home">
            <div id="page-home-content" className="container">
                <header>
                    <div className="user-info">
                        <img className="userimg" src="https://media-exp1.licdn.com/dms/image/C4D03AQHMM8CYcZcV6Q/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=JRj9ESdmnE5glMTxtQWTTX3eOQmSf_5uxaBesRahoFM" alt="" />
                        <p>Raiane Oliveira</p>
                    </div>
                    <img className="sair" src={sairIcon} alt="" />
                </header>
                <div className="logo-home">
                    <div className="proffy-logo">
                        <img className="logo-img" src={logoImg} alt="Proffy" />
                        <h2>Sua plataforma de estudos online.</h2>
                    </div>
                    <div className="bg-home">
                        <img src={homeImg} alt="Logo" />
                    </div>
                </div>
                <div className="footer-container">
                    <div className="welcome">
                        <p>Seja bem vindo!</p>
                        <p>O que deseja fazer?</p>
                    </div>
                    <div className="connections">
                        <p>Mais 200 acessos já realizados! <img src={heartIcon} alt="Coração Roxo" /> </p>
                        
                    </div>
                    <div className="buttons">
                        <Link to="/study" className="study">
                            <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
                        <Link to="give-classes" className="give-classes">
                            <img src={giveClassesIcon} alt="Dar aulas" />
                        Ensinar
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;