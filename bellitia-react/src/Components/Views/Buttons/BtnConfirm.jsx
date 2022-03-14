import react from "react";
import './BtnConfirm.css';

const BtnConfirm = () => {
    function Send(e) {
        e.preventDefault()
        console.log('testando')
    }


    return (
        <div>
            <button 
            type='submit' 
            className='btn_confirm'
            onClick={Send}
            >Confirmar</button>
        </div>
    );
}
 export default BtnConfirm;