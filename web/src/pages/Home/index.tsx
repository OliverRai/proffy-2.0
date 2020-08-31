import React from 'react';

import './styles.css';
import sairIcon from '../../assets/images/icons/sair.svg';
import logoImg from '../../assets/images/logo.svg';
import homeImg from '../../assets/images/landing.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

function Home() {
    return (
        <div id="page-home">
            <div id="page-home-content" className="container">
                <div className="logo">
                    <div className="proffy-logo">
                        <img className="logo-img" src={logoImg} alt="Proffy" />
                        <h2>Sua plataforma de estudos online.</h2>
                    </div>
                    <div className="bg-home">
                        <img src={homeImg} alt="Logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;