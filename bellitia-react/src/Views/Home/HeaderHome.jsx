import React from 'react';
import { FaUserAlt } from 'react-icons/fa'
import './HeaderHome.css';

const HeaderHome = () => (
        <div className='HeaderHome'>
            <h1>Bellitia</h1>
            
                <button className='btn_FaUserAlt'>
                    <a><i><FaUserAlt/></i></a>
                </button>
        </div>
)

export default HeaderHome;