import React from 'react';
import {Link} from 'react-router-dom';
import SwitchButton from '../Buttons/SwitchButton';
import styles from "./cardProps.module.css"


const BarraLateral = () =>{
    return (
        <div className={styles.container_B_Lateral}>
            
            <Link to='#'>CONTROLE DE AGENDA</Link>
            <Link to='/novofuncionario'>CADASTRO DE FUNCIONÁRIO</Link>
            <Link to='/novoservico'>CADASTRO DE SERVIÇOS</Link>
            <Link to='/novoestabelecimento'>ALTERAÇÃO DE DADOS</Link>
            <Link to='/help'>PRECISO DE AJUDA</Link>
            <Link to='#'>SAIR</Link>
            <SwitchButton />
            
        </div>
)
    }
export default BarraLateral;