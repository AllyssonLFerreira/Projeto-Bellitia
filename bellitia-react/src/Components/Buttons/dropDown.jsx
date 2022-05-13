import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import './dropDown.css'

const MenuDropDown = () =>{
    const DropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)
    

    
    return (
        <div className="dropDown">
            <div className="menuDropDown">
              <button onClick={onClick} > 
                  <a> <i> <FaUserAlt/> </i> </a>
              </button>
              <nav 
                ref={DropDownRef}
                className={`menuDrop ${isActive ? "active" : "inactive"}`}
              >  
                <ul className="access">
                  <li>
                      <Link to="Login"> Login Estabelecimento </Link>
                  </li>
                  <li>
                      <Link to="/usuario/login"> Login Cliente </Link>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
    );
}

export default MenuDropDown