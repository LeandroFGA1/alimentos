import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import Quality from '../pages/Quality';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
function Router() {
    return (
        <Routes>
            <Route path='/' index   element={<Home/>}/>
            <Route path="/login"    element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/quality'  element={ <Quality/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/aboutUs'  element={<AboutUs/>}/>
            <Route path='/contact'  element={<Contact/>}/>
        </Routes>
    )
}

export default Router