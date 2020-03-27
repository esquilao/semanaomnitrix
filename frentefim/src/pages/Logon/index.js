import React from 'react';
import './style.css';
import { Link} from 'react-router-dom';
import {FiLogIn } from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';

export default function Logon(){
return (
    <div className="logon-container">
        <section className="form">
            <img src={logoimg} alt="Be The Hero"/>

            <form>
                <h1>Faça seu logon</h1>
            <input placeholder="Sua Id"></input>

            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#E02041"></FiLogIn>
                Não tenho cadastro
            </Link>

            </form>

        </section>
        <img src={heroesImg} alt="Heroes"/>
    </div>
);

}