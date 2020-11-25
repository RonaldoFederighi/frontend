import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link , useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';
import './styles.css';

export default function Login() {
    const [ id , setId] = useState('');
    const history  = useHistory

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('profile');

        } catch(err) {


        }
    }
    
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>
                <form onsubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onchange={ e => setId(e.target.value)}
                    />
                    
                    <Link to="/profile">
                        <button type="submit" className="button">Entrar</button>
                    </Link>
                               
                    <Link to="/register">
                        <FiLogIn size={16} color='#e02041' />
                        Não Tenho Cadastro
                    </Link> 
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}