import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Views/Home/Home"
import Login from './Views/Login';
import LoginUsuario from './Views/LoginUsuario/LoginUsuario';

import HomeEstablishment from "./Views/EstablishmentPages/EstablishmentHome/HomeEstablishment";
import NewServiceCard from "./Views/EstablishmentPages/NewService/index";
import NewEstCard from "./Views/EstablishmentPages/NewEstablishment/Index";
import { EstAddress } from "./Views/EstablishmentPages/EstAddress";
import { DataChange } from "./Views/EstablishmentPages/DataChange";
import { NewEmployee } from "./Views/EstablishmentPages/NewEmployee/Index";
import { Help } from "./Views/EstablishmentPages/Help/Index";

import { NewUser } from "./Views/Cliente/NewUser/Index";
import { ClientHome } from "./Views/Cliente/ClientHome/home";
import { UserHelp } from "./Views/Cliente/Help/index";
import { ProfissionalAgendamento } from "./Views/Cliente/Agendamentos/ProfissionalAgendamentos";
import Horarios from "./Views/Cliente/Agendamentos/Horarios";
import MeusAgendamentos from "./Views/Cliente/MeusAgendamentos/MeusAgendamentos";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home /> } />

                <Route path='/login' exatct element={<Login /> } />
                <Route path='/usuario/login' exact element={<LoginUsuario /> } />

                <Route path='/novousuario' exatct element={ <NewUser /> } />
                <Route path='/areacliente' exact element={<ClientHome />} />
                <Route path='/agendamentos' exact element={<ProfissionalAgendamento /> } />
                <Route path='/usuario/help' exact element={<UserHelp /> } />
                <Route path='/agendamentoscliente' exact element={<MeusAgendamentos /> } />

                <Route path='/novoestabelecimento' exact element={<NewEstCard /> } />
                <Route path= '/novoestabelecimento/address' exact element={<EstAddress/>} />
                <Route path='/estabelecimento' exact element={<HomeEstablishment /> } />
                <Route path='/estabelecimento/alteracao' exact element={<DataChange /> } />
                <Route path='/novoservico' exact element={<NewServiceCard /> } />
                <Route path='/novofuncionario' exact element={<NewEmployee /> } />
                <Route path='estabelecimento/help' exact element={<Help /> } />
                <Route path='/horarios' element={<Horarios /> } />
                
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;