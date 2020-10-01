import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import './styles.css';


export default function Cadastro() {
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>
                <form>
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG</p>
                    <a href="/register">
                        <FiLogIn size={16} color='#e02041' />
                        Voltar para Logon
                    </a> 
                </form>
            </section>
            <form classname="form">
                    <input placeholder="Nome da Ong"/>
                    <input placeholder="Email"/>
                    <input placeholder="WhatsApp"/>
                    <input placeholder="Cidade"/>
                    <input placeholder="UF"/>
                    <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    );
}