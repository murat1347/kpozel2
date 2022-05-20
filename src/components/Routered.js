import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home/Home";
import Error404 from "./Errors/Error404";
import Table from "./Tables/Table"
import Product from "./Product/Product";
import Form from './Forms/Form';
import FormDemo from './Forms/FormDemo';
import Add from './Forms/Add';
import Modals from './Forms/Modals'
import ProtectedRoute from './ProtectedRoute';
import Admin from './Admin/Admin';
function Routered() {
  return (
   <Router>
    <Routes>
    <Route path="/" exact element={<Home />} />
    {/* {/* <Route path="/?CategoryId=:CategoryId&sortBy=:sortBy&page=:page&PAGE_SIZE=:PAGE_SIZE" element={<Home />} /> */}
    <Route path="/product/:product_id" element={<Product />} />
    <Route path="/tables" element={<Table />} />
    <Route path="/form" element={<Form />} />
    <Route path="/add" element={<Add />} />
    <Route path="/modals" element={<Modals />} />
    <Route path="/formdemo" element={<FormDemo />} />
    <Route path="/admin" element={<ProtectedRoute/>} />
     <Route path="*" element={<Error404 />} />
    </Routes>
    </Router>
  )
}

export default Routered