import styles from './BtnLayout.module.css'

const BtnConfirm = () => {
    return (
        <div>
            <button 
            type='submit' 
            className={styles.btn_confirm}
            >Confirmar</button>
        </div>
    );
}
 export default BtnConfirm;