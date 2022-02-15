import React from 'react';
import './Barra-Lateral.css';

const BarraLateral = () =>(

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
        <div className='buttons__prop'>
            <button className='barra-lateral__btn btn__OpenClose'>Abrir Estabelecimento</button>
            <button className='barra-lateral__btn btn__Logout'>Sair/Logout</button>
        </div>
    </div>
)

export default BarraLateral;