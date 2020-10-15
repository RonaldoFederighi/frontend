import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';


export default function Cadastro() {
    return(
        <div className="cadastro-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>
                <form>
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG</p>
                    <Link to="/">
                        <FiLogIn size={16} color='#e02041' />
                        Voltar para Logon
                    </Link> 
                </form>
            </section>
            <form classname="formulario">
                    <input placeholder="Nome da Ong"/>
                    <input placeholder="Email"/>
                    <input placeholder="WhatsApp"/>
                    <div className='input-group'>
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={ {width : 80} }/>                        
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    );
}