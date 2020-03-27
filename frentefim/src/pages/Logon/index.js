import React, { useState } from 'react';
import './style.css';
import { Link, useHistory} from 'react-router-dom';
import {FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = useState();
    const history = useHistory();

   async function handleLogin(e){
         e.preventDefault();

         try{
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            console.log(response.data.name);

            history.push('/profile');
            
         }catch (err) {
            alert('falha no login');
         }
    }
    
return (
    <div className="logon-container">
        <section className="form">
            <img src={logoimg} alt="Be The Hero"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
            <input placeholder="Sua Id"
            value={id}
            onChange={e => setId(e.target.value)}
            ></input>
               
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