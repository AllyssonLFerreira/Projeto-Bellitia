import React from 'react';
import BtnOpen from '../Buttons/BtnOpen';
import BtnClose from '../Buttons/BtnClose';
import LogoutBtn from '../Buttons/Logout';
import './Barra-Lateral.css';

const BarraLateral = () =>{
    return (
        <div className='barra-lateral'>
            <nav>
                <ul className='barra-lateral__links'>
                    <li><a href="">CONTROLE DE AGENDA</a></li>
                    <li><a href="">CADASTRO DE FUNCIONÁRIO</a></li>
                    <li><a href="">CADASTRO DE SERVIÇOS</a></li>
                    <li><a href="">ALTERAÇÃO DE DADOS</a></li>
                    <li><a href="">CONTROLE FINANCEIRO</a></li>
                    <li><a href="">PRECISO DE AJUDA</a></li>
                </ul>
            </nav>
            <div className='btn_prop'>
                <BtnOpen />
                <BtnClose />
                <LogoutBtn />
            </div>
    </div>
)
    }
export default BarraLateral;