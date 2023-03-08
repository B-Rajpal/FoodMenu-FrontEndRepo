import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Add from './pages/add';
import Customer from './pages/Customer';
import Delete from './pages/delete';
import DeleteCustomer from './pages/deleteCustomer';
import Home from './pages/home';
import Login from './pages/login';
import Menu from './pages/Menu';
import Update from './pages/update';
import UpdateCustomer from './pages/Updatecustomer';
function Routing() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Add" element={<Add/>}/>
    <Route path="/Update" element={<Update/>}/>
    <Route path="/UpdateCustomer" element={<UpdateCustomer/>}/>
    <Route path="/delete" element={<Delete/>}/>
    <Route path="/deletecustomer" element={<DeleteCustomer/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Customer" element={<Customer/>}/>
    </Routes>
    </>
  )
}

export default Routing;