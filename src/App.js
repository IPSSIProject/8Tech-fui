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
import Payment from "./screens/Payment";
import {Dashboard} from "@mui/icons-material";
import DashBoard from "./screens/Admin/DashBoard";
import AdminProducts from "./screens/Admin/AdminProducts";
import AdminNewProductForm from "./screens/Admin/AdminNewProductForm";
import {fetchCategoriesRequest} from "./redux/modules/categories/actions";
import AdminEditProduct from "./screens/Admin/AdminEditProduct";

export default function App() {
    const dispatch = useDispatch();
    const sessionStorage = localStorage.getItem('session');

    useEffect(() => {
        if (sessionStorage) {
            dispatch(refreshSession());
        }
    }, []);

    useEffect(() => {
        dispatch(fetchCategoriesRequest());
        dispatch(fetchProductsRequest());

    }, []);

    return (
        <Layout>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Registration />} />
                <Route exact path={"/products"} element={<Products />} />
                <Route exact path={"/cart"} element={<Cart />} />
                <Route exact path={"/payment"} element={<Payment />} />
                <Route exact path={"/"} element={<Home />} />
                <Route exact path={"/admin-space"} element={<DashBoard />} />
                    <Route exact path={'/admin-space/products'} element={<AdminProducts />} />
                    <Route exact path={'/admin-space/new-product'} element={<AdminNewProductForm />} />
                    <Route exact path={'/admin-space/edit-product'} element={<AdminEditProduct />} />
            </Routes>
        </Layout>
    );
}
