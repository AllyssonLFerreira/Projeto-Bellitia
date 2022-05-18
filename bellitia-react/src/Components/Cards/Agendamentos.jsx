import React from 'react';
import styles from '../Cards/cardProps.module.css';

const Agendamentos = () => {
    return (
        <div>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>Horários</th>
                        <th>Profissional 1</th>
                        <th>Profissional 2</th>
                        <th>Profissional 3</th>
                        <th>Profissional 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>09:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                    <tr>
                        <td>10:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                    <tr>
                        <td>11:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                    <tr>
                        <td>13:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                    <tr>
                        <td>14:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                    <tr>
                        <td>15:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                    <tr>
                        <td>16:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                    <tr>
                        <td>17:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                    <tr>
                        <td>18:00</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                        <td>cliente - serviço</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Agendamentos;