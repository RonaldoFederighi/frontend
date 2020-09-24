import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import './styles.css';


export default function Login() {
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID"/>
                    <button type="submit" className="button">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color='#e02041' />
                        Não Tenho Cadastro
                    </a> 
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}