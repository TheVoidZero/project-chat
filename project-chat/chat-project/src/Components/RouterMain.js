import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Login'
import Home from './Home';

const NavegacionPrincipal = () => {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={ <Login/> } />
                    <Route path="/home" element={ <Home/> } />
                    <Route path="*" element={(
                        <div>
                            <h1>Error 404</h1>
                            <p>Esa pagina no se encuentra en esta pagina</p>
                        </div>)} />
                </Routes>
        </BrowserRouter>
    )
}

export default NavegacionPrincipal
