import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styles from '../Cards/cardProps.module.css';

const Agendamentos = ({ data, column }) => {
    const [services, setServices] = useState([])
    const [hora, setHorario] = useState('');
    const [servico, setServico] = useState('');
    
    const datetime = new Date().toJSON().slice(0, 19).replace('T', ' ')

    const onSubmit = async (event) => {
        const values = { data: datetime, horario: hora, profissional: 1, estabelecimento: 1, nome: 1, servico: servico }
        event.preventDefault();
        console.log(hora)
        console.log(servico)
      try {
        const send = await axios.post('http://localhost:5000/agendamentos', values)
          .then(res => res.data)
        alert('serviço cadastrado')
      }
      catch(err) {
        
        alert(err.response.data)
      }
    }

    useEffect(() =>{
            axios.get('http://localhost:5000/servico')
            .then((response) => {
               setServices (response.data); 
              console.log(response.data);
            });
    }, []);

    const horarios = [
        { 
            index: 1,
            horario:'09:00'
        },
        {
            index: 2,
            horario:'10:00'
        },
        {
            index: 3,
            horario:'11:00'
        },
        {
            index: 4,
            horario:'12:00'
        },
        {
            index: 5,
            horario:'13:00'
        },
        {
            index: 6,
            horario:'14:00'
        },
        {
            index: 7,
            horario:'15:00'
        },
        {
            index: 8,
            horario:'16:00'
        },
        {
            index: 9,
            horario:'17:00'
        },
        {
            index: 10,
            horario:'18:00'
        }
]

    return (
        <div className={styles.tabela1}>
            <div>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>Horários</th>
                    </tr>
                </thead>
                <tbody>
                    {horarios.map((horario) => 
                    <tr key={horario.index}> 
                    <td
                    value={horario.horario}
                    onClick={ (e) => setHorario(horario.horario) }
                    >{ horario.horario }</td> 
                    </tr>
                    )}
                </tbody>
            </table>
            </div>
            <div>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        <th>Serviços</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => 
                    <tr key={service.id_service}> 
                        <td 
                            value={service.id_service}
                            onClick={ (e) => setServico(service.id_service) }>
                                { service.especificacao }<br></br>
                                {service.valor}
                        </td> 
                    </tr>
                    )}
                </tbody>
            </table>
            <button onClick={onSubmit}> Agendar </button>
            </div>
        </div>
    )
}

export default Agendamentos;