import React, {useEffect} from 'react';
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
import {useDispatch} from "react-redux";
import {refreshSession} from "./redux/modules/session";

export default function App() {
    const dispatch = useDispatch();
    const sessionStorage = localStorage.getItem('session');
    useEffect(() => {
        if (sessionStorage) {
            dispatch(refreshSession());
        }
    }, [])

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
