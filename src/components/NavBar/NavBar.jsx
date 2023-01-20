import style from './NavBar.module.css';
import * as React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import {selectAuth} from '../../store/profile/selector';
import {onSignOut} from '../../services/firebase';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useSelector} from "react-redux";

const menuItems = [
    {id: 1, name: 'Main',    url: ''},
    {id: 2, name: 'Profile', url: 'profile'},
    {id: 3, name: 'Chats',   url: 'chats'},
    {id: 4, name: 'About',   url: 'about'},
    {id: 5, name: 'Nobel',   url: 'nobel'},
    // {id: 6, name: 'SingIn',  url: 'signin'},
    // {id: 7, name: 'SignUp',  url: 'signup'},
];

export const NavBar = () => {
    const activeClassName = style.active;

    const navigate = useNavigate();

    const name = useSelector((store) => store.profile.name);
    const isAuth = useSelector((store) => store.profile.isAuth);
    // const isAuth = useSelector(selectAuth());

    const handleLogin = () => {
        navigate('/signin')
    };
    const handleSignUp = () => {
        navigate('/signup')
    };
    const handleLogOut = async () => {
        await onSignOut();
    };

    return (
        <>
            <AppBar position="static" style={{background: '#360568'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex'}}}>
                            {menuItems.map((item) => (
                                <NavLink
                                    to={item.url}
                                    className={({ isActive }) => isActive ? activeClassName : undefined}
                                    key={item.id}
                                >
                                    <Button sx={{my: 2, color: '#A5E6BA'}}>
                                        {item.name}
                                    </Button>
                                </NavLink>
                            ))}
                        </Box>
                        {!isAuth && (
                            <>
                                <Button
                                    sx={{my: 2, color: '#A5E6BA'}}
                                    onClick={handleLogin}
                                >login</Button>
                                <Button
                                    sx={{my: 2, color: '#A5E6BA'}}
                                    onClick={handleSignUp}
                                >sign up</Button>
                            </>
                        )}
                        {isAuth && (
                            <>
                                <Button
                                    sx={{my: 2, color: '#A5E6BA'}}
                                    onClick={handleLogOut}
                                >log out</Button>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
            <main style={{overflow: 'hidden'}}>
                <Outlet/>
            </main>
        </>
    );
};