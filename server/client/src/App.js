import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pocetna from './Pocetna';
import Login from './Login';
import Register from './Register';
import Kontakt from './Kontakt';
import axios from "axios";
import Ponuda from './Ponuda';
import AdminPage from './AdminPage';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';
 import '@fortawesome/fontawesome-free/css/all.min.css';
 import 'bootstrap-css-only/css/bootstrap.min.css';
 import 'mdbreact/dist/css/mdb.css';
const mdbreact = require('mdbreact'); const { Button, Collapse } = mdbreact;
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
function Example() {
    const[token,setToken] = useState();
    const[role,setRole] = useState("");

    const [products,setProducts] = useState([ ]);
    const [orders,setOrders] = useState([ ]);



    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axiosInstance.get( "http://127.0.0.1:8000/api/products",
              {
                // headers: 
                // {
                //     'Authorization': `Bearer ${window.sessionStorage.getItem("auth_token")}`
                // }
              }
            );
            setProducts(res.data.data);
            console.log(res.data.data)
          } catch (err) {
            console.log(err);
          }
        };
        getProducts();
      }, [ axiosInstance]);


      useEffect(() => {
        const getOrders = async () => {
          try {
            const res = await axiosInstance.get( "http://127.0.0.1:8000/api/orders",
              {
                headers: 
                {
                    'Authorization': `Bearer ${window.sessionStorage.getItem("auth_token")}`
                }
              }
            );
            setOrders(res.data.data);
            console.log(res.data.data)
          } catch (err) {
            console.log(err);
          }
        };
        getOrders();
      }, [ axiosInstance]);





      return (
        <BrowserRouter>
          <div> {/* or use a <React.Fragment> */}
            <Navbar token={token} addToken={setToken} addRole={setRole} />
            <Routes>
              <Route path="/" element={<Pocetna />} />
              <Route path="/login" element={<Login addToken={setToken} addRole={setRole} />} />
              <Route path="/admin" element={<AdminPage porudzbine={orders} />} />
              <Route path="/admin/dodaj" element={<AddProductForm />} />
              <Route path="/admin/productList" element={<ProductList products={products} setProducts={setProducts} />} />
      
              <Route path="/register" element={<Register />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/ponuda" element={<Ponuda products={products} />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      );
      
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
