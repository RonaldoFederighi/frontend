import React, { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api'

export default function Profile() {
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, {ongName} </span>
            
                <Link className="button" to="/incidents/new">
                    Cadastrar Novo Caso                    
                </Link>
                
                <button type="button">
                        <FiPower size={18} color="#E02041" />
                </button>
            
            </header> 
            <h1>Casos Cadastrados</h1>
            <ul>              
                        <li>
                            <strong>CASO:</strong>
                            <p>Aqui vai o título do caso</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>Aqui vai uma descrição</p>

                            <strong>VALOR:</strong>
                            <p>R$ 120,00</p>

                            <button 
                                type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>

                        <li>
                            <strong>CASO:</strong>
                            <p>Aqui vai o título do caso</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>Aqui vai uma descrição</p>

                            <strong>VALOR:</strong>
                            <p>R$ 120,00</p>

                            <button 
                                type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>

                        <li>
                            <strong>CASO:</strong>
                            <p>Aqui vai o título do caso</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>Aqui vai uma descrição</p>

                            <strong>VALOR:</strong>
                            <p>R$ 120,00</p>

                            <button 
                                type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>

                        <li>
                            <strong>CASO:</strong>
                            <p>Aqui vai o título do caso</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>Aqui vai uma descrição</p>

                            <strong>VALOR:</strong>
                            <p>R$ 120,00</p>

                            <button 
                                type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>

                        <li>
                            <strong>CASO:</strong>
                            <p>Aqui vai o título do caso</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>Aqui vai uma descrição</p>

                            <strong>VALOR:</strong>
                            <p>R$ 120,00</p>

                            <button 
                                type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>

                        <li>
                            <strong>CASO:</strong>
                            <p>Aqui vai o título do caso</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>Aqui vai uma descrição</p>

                            <strong>VALOR:</strong>
                            <p>R$ 120,00</p>

                            <button 
                                type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>

                        <li>
                            <strong>CASO:</strong>
                            <p>Aqui vai o título do caso</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>Aqui vai uma descrição</p>

                            <strong>VALOR:</strong>
                            <p>R$ 120,00</p>

                            <button 
                                type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>
                                                    
            </ul>                
        </div> 
    )
}