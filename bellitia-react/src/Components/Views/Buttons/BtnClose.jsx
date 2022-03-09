import { useState } from 'react';
import './BtnClose.css';

const BtnClose = () => {
    
    const [close, setClose] = useState('Fechar Estabelecimento');
    const toggleOff = () => {
        setClose('Estabelecimento Fechado')
        alert('OK! O estabelecimento foi fechado')
    }
    
    
    return (
        <div>
            <button
            onClick={toggleOff}
            className="btn_close"
            > {close} 
            </button>
        </div>
    )
}

export default BtnClose;