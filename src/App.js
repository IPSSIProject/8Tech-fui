import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login.js';
import Registration from './screens/Registration.js';
import Products from './screens/Products'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/App.css';
import Home from "./screens/Home";
import Layout from "./components/buisness/Layout";

export default function App() {

    return (
        <Layout>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Registration />} />
                <Route exact path={"/products"} element={<Products />} />
                <Route exact path={"/"} element={<Home />} />
            </Routes>
        </Layout>
    );
}
