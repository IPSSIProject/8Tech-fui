import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/logo-blanc.png";
import {useNavigate} from "react-router-dom";
import {Badge, Link, Stack} from "@mui/material";
import Connected from "../buisness/Connected";
import {useDispatch, useSelector} from "react-redux";
import {closeSession} from "../../redux/modules/session";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import {cartSelectors} from "../../redux/modules/cart/cartSelectors";
import {sumBy} from "lodash";
import {sessionSelectors} from "../../redux/modules/session/sessionSelectors";

const pages = [
    {
        label: 'Products',
        path: '/products',
        query: {}
    },
    {
        label: 'Promo',
        path: '/products',
        query: {
            promo: true
        }
    },
];

const ResponsiveAppBar = () => {
    const dispatch = useDispatch();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const cartItems = useSelector(cartSelectors.cartItems);
    const quantityCart = sumBy(cartItems, 'quantity');
    const isAdmin = useSelector(sessionSelectors.isAdmin);
    const isConnected = useSelector(sessionSelectors.connected);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = () => {
        handleCloseUserMenu();
        dispatch(closeSession());
    }

    const goToEspaceAdmin = () => {
        handleCloseUserMenu();
        navigate('/admin-space');
    }

    return (
        <AppBar position="static">
            <Container maxWidth="none">
                <Toolbar disableGutters>
                    <Box sx={{display: { xs: 'none', md: 'flex' }, alignItems: 'center'}}>
                        <Link href={'/'}>
                            <img src={logo} alt={"logo"} style={{width: 85}}/>
                        </Link>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            8tech
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={`${page.path}_${index}`}
                                    onClick={() => navigate(page.path, {state: page.query})}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link href={'/'} sx={{display: { xs: 'flex', md: 'none' },}}>
                        <img src={logo} alt={"logo"} style={{width: 85}}/>
                    </Link>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        8tech
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={`${page.path}_${index}`}
                                onClick={() => navigate(page.path, {state: page.query})}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Button sx={{color: 'white'}} onClick={() => navigate('/login')}>
                            Se connecter
                        </Button>
                    </Stack>
                    <Connected>
                        <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                <IconButton>
                                    <Badge badgeContent={quantityCart} color={'error'}>
                                    <ShoppingBasketOutlinedIcon
                                        onClick={() => navigate('/cart')}
                                        fontSize={'large'}
                                        sx={{color: 'white'}}
                                    />
                                    </Badge>
                                </IconButton>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {
                                        isAdmin && (
                                            <MenuItem key={'account'} onClick={goToEspaceAdmin}>
                                                <Typography textAlign="center">Espace admin</Typography>
                                            </MenuItem>
                                        )
                                    }
                                    <MenuItem key={'account'} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Compte</Typography>
                                    </MenuItem>
                                    <MenuItem key={'orders'} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Mes commandes</Typography>
                                    </MenuItem>
                                    <MenuItem key={'logout'} onClick={logout}>
                                        <Typography textAlign="center">Déconnexion</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Stack>
                    </Connected>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
