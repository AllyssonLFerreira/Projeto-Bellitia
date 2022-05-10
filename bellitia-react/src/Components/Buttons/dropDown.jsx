import React, { useRef, useState } from "react";
import { FaUserAlt } from 'react-icons/fa';
import './dropDown.css'

const MenuDropDown = () =>{
    const DropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)
    

    
    return (
        <div className="dropDown">
                <div className="menuDropDown">
                <button onClick={onClick} className="btn_FaUserAlt"> 
                <a><i><FaUserAlt/></i></a>
                </button>

                <nav
                 ref={DropDownRef}
                 className={`menuDrop ${isActive ? "active" : "inactive"}`}
                >  
                    <ul>
                        <li className="li1">
                            <a href="Login">Login Estabelecimento</a>
                        </li>
                        <li className="li1">
                            <a href="userLogin">Login cliente</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MenuDropDown