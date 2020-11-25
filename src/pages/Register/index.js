import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function Cadastro() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');    

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso é ${response.data.id}`);
        } catch (err) {
            alert(`Erro ao cadastrar ONG.`);
        }
    }
    
    return(
        <div className="cadastro-container">
            <section className="form">
                <form>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG</p>
                    <Link to="/">
                        <FiLogIn size={16} color='#e02041' />
                        Voltar para Logon
                    </Link> 
                </form>
            </section>
            <form onSubmit={handleRegister}  classname="formulario">
                <input 
                    placeholder="Nome da Ong"
                    value={name} 
                    onchange={ e => setName(e.targed.value)}
                />

                <input 
                    type="email"
                    placeholder="E-mail"
                    value={email} 
                    onchange={ e => setEmail(e.targed.value)}
                />
                
                <input 
                    placeholder="WhatsApp"
                    value={whatsapp} 
                    onchange={ e => setWhatsapp(e.targed.value)}
                />


                <div className='input-group'>
                    <input 
                        placeholder="Cidade"
                        value={city} 
                        onchange={ e => setCity(e.targed.value)}
                    />
                    <input 
                        placeholder="UF" 
                        style={ {width : 80} }
                        value={uf} 
                        onchange={ e => setUf(e.targed.value)}     
                    />                        
                </div>
                <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    );
}