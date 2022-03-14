import React from 'react';
import Foto1 from '../Images/Foto1.jpg';
import foto2 from '../Images/foto2.jpg';
import foto3 from '../Images/foto3.jpg';
import './Banner.css';

const Banner = () => (
  <div className='Banner'>
      <div className="info-banner">
        <img src={Foto1} alt="" className="image-banner" />
        <div className="info-prop">
          <a href="#" className="link-prop">Saiba mais</a>
        </div>
      </div>
      <div className="info-banner">
        <img src={foto2} alt="" className="image-banner" />
        <div className="info-prop">
          <a href="#" className="link-prop">Saiba mais</a>
        </div>
      </div>
      <div className="info-banner">
        <img src={foto3} alt="" className="image-banner" />
        <div className="info-prop">
          <a href="#" className="link-prop">Saiba mais</a>
        </div>
      </div>
  </div>
)

export default Banner;