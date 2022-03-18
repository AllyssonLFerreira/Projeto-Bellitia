import { useState } from 'react';
import './BtnOpen.css';


const BtnOpen= () => {

    const [open, setOpen] = useState('Abrir Estabelecimento');
    

    const toggleOn = () => {
        setOpen('Estabelecimento Aberto')
        alert('OK! O estabelecimento foi aberto.')

    }

    return (
        <div>
            <button 
            onClick={toggleOn}
            className="btn_open"
            > {open}
            </button>
        </div>
    );
}

export default BtnOpen;