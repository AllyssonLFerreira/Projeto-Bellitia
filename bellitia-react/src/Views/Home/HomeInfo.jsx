import React from 'react';
import './HomeInfo.css';
import barbeiroImage from '../../Components/Images/barbeiroImage.jpeg';
import cabeleireiroImage from '../../Components/Images/cabeleireiroImage.jpeg';
import esteticistaImage from '../../Components/Images/esteticistaImage.jpg';

const HomeInfo = () => (
  <div className='HomeInfo'>
    <div className='servicos2'>
      <div className="info-servicos">
        <h2 className="titulo-servicos">Barbearias!</h2>
        <p>Diversas Barbearias parceiras oferencendo:</p>
        <ul className="servicos">
          <li>Maquina</li>
          <li>Barba</li>
          <li>Cortes + Barba</li>
          <li>Máquina</li>
          <li>Pigmentação de Barba</li>
          <li>Acabamentos</li>
          <li>Sobrancelha</li>
          <li>Hidratação de Barba</li>
        </ul>
      </div>
      <div className="info-servicos">
        <h2 className="titulo-servicos">Estéticas!</h2>
          <p>Diversas Estéticas parceiras oferencendo:</p>
          <ul className="servicos">
            <li>Skinbooster</li>
            <li>Drenagem Linfática</li>
            <li>Massagem Modeladora</li>
            <li>Harmonização Facial</li>
            <li>Hidratações de Pele</li>
          </ul>
      </div>
      <div className="info-servicos">
        <h2 className="titulo-servicos">Salões de beleza!</h2>
          <p>Diversos Salões parceiros oferencendo:</p>
          <ul className="servicos">
                   <li>Cortes Femininos</li>
            <li>Tratamentos Capilares</li>
          <li>Hidratação e Fortalecimento</li>
            <li>Manicure e Pedicure</li>
            <li>Make Fresh</li>
            <li>Air Brush</li>
          </ul>
      </div>
    </div>
    <div className='sobre-nos'>
          <div className='sobre-nos-images'>
            <img src={barbeiroImage} alt="" id='imagens' />
            <img src={cabeleireiroImage} alt="" id='imagens' />
            <img src={esteticistaImage} alt="" id='imagens' />        
          </div>
          <div className="sobre-nos-info">
            <h3>Um jeito Novo e Dinâmico para cuidar da sua beleza</h3>
            <p>Somos uma plataforma para agendamento online de diversos procedimentos de beleza, barbearias e estáticas, em diversos estabelecimentos conveniados pelo Brasil todo.</p>
            <p>Venha procurar serviços personalizados de acordo com a sua disponibilidade ou seja um estabelecimento conveniado.</p>
          </div>
    </div>  
  </div>
)


export default HomeInfo;