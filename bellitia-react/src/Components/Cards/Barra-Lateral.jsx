import React from 'react';
import {Link} from 'react-router-dom';
import BtnClose from '../Buttons/BtnClose';
import BtnOpen from '../Buttons/BtnOpen';
import LogoutBtn from '../Buttons/Logout';

import './Barra-Lateral.css';

const BarraLateral = () =>{
    return (
        <div className='barra-lateral'>
                <div className='barra-lateral__links'>
                    <Link to='#'>CONTROLE DE AGENDA</Link>
                    <Link to='/novofuncionario'>CADASTRO DE FUNCIONÁRIO</Link>
                    <Link to='/novoservico'>CADASTRO DE SERVIÇOS</Link>
                    <Link to='/novoestabelecimento'>ALTERAÇÃO DE DADOS</Link>
                    <Link to='#'>CONTROLE FINANCEIRO</Link>
                    <Link to='#'>PRECISO DE AJUDA</Link>
                </div>
            <div className='btn_prop'>
                <BtnOpen />
                <BtnClose />
                <LogoutBtn />
            </div>
    </div>
)
    }
export default BarraLateral;