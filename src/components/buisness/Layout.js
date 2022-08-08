import React from 'react';
import {Box} from "@mui/material";
import ResponsiveAppBar from "../agnostic/appBar";
import Footer from "./Footer";

export default function Layout({children}) {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            margin: '0'
        }}>
            <ResponsiveAppBar/>
            <Box sx={{padding: '20px 80px'}}>
                {children}
            </Box>
            <Footer />
        </Box>
    )
}
