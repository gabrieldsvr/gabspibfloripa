import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Retiro from "../pages/Retiro";
import Estudos from "../pages/Estudos";
import Agenda from "../pages/Agenda";
import Fotos from "../pages/Fotos";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/retiro" element={<Retiro/>}/>
            <Route path="/pregacoes" element={<Estudos/>}/>
            <Route path="/agenda" element={<Agenda/>}/>
            <Route path="/fotos" element={<Fotos/>}/>
        </Routes>
    )
}

export default MainRoutes;