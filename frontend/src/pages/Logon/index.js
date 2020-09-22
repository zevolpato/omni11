import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import logImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return (
        <div className="class logon-container">
            <section className="form">  
            <img src={logImg} alt="Be the Hero"/>
             <form>
                <h1>Faça seu logon</h1>
                <input placeholder="Sua Id"/>
                <button className="button" type="submit">Entrar</button>  

                <Link to="/register">
                <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
                </Link>                
             </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>

        </div>
    );
} 