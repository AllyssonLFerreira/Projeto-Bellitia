import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Views/Home/Home"
import Login from './Views/Login';
import LoginUsuario from './Views/LoginUsuario/LoginUsuario';

import HomeEstablishment from "./Views/EstablishmentPages/EstablishmentHome/HomeEstablishment";
import NewServiceCard from "./Views/EstablishmentPages/NewService/NewService";
import NewEstCard from "./Views/EstablishmentPages/NewEstablishment/NewEstablishment";
import NewEnployee from "./Views/EstablishmentPages/NewEmployee/NewEmployee";

import { NewUser } from "./Views/Cliente/NewUser/Index";
import { ClientHome } from "./Views/Cliente/ClientHome/home";
import MeusAgendamentos from "./Views/Cliente/Agendamentos/MeusAgendamentos";

import { Help } from "./Views/EstablishmentPages/Help/Help";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home /> } />

                <Route path='/login' exatct element={<Login /> } />
                <Route path='/userlogin' exact element={<LoginUsuario /> } />

                <Route path='/newuser' exatct element={ <NewUser /> } />
                <Route path='/areacliente' exact element={<ClientHome />} />
                <Route path='/agendamentos' exact element={<MeusAgendamentos /> } />

                <Route path='/estabelecimento' exact element={<HomeEstablishment /> } />
                <Route path='/novoestabelecimento' exact element={<NewEstCard /> } />
                <Route path='/novoservico' exact element={<NewServiceCard /> } />
                <Route path='/novofuncionario' exact element={<NewEnployee /> } />
                
                <Route path='/help' exact element={<Help /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;