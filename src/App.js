import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/Login.js';
import Registration from './screens/Registration.js';
import Products from './screens/Products'
import Cart from './screens/Cart'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/App.css';
import Home from "./screens/Home";
import Layout from "./components/buisness/Layout";
import {useDispatch, useSelector} from "react-redux";
import {refreshSession} from "./redux/modules/session";
import {ProductsState} from "./redux/modules/products";
import {fetchProductsRequest} from "./redux/modules/products/actions";

export default function App() {
    const dispatch = useDispatch();
    const sessionStorage = localStorage.getItem('session');
    const productStatus = useSelector(ProductsState.selectors.productsStatus);

    useEffect(() => {
        if (sessionStorage) {
            dispatch(refreshSession());
        }
    }, []);

    useEffect(() => {
        if (['fetched', 'loading'].includes(productStatus)) {
            return
        }
        dispatch(fetchProductsRequest());

    }, [productStatus]);

    return (
        <Layout>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Registration />} />
                <Route exact path={"/products"} element={<Products />} />
                <Route exact path={"/cart"} element={<Cart />} />
                <Route exact path={"/"} element={<Home />} />
            </Routes>
        </Layout>
    );
}
