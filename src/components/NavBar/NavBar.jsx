import style from './NavBar.module.css';
import * as React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const menuItems = [
    {id: 1, name: 'Main', url: ''},
    {id: 2, name: 'Profile', url: 'profile'},
    {id: 3, name: 'Chats', url: 'chats'},
    {id: 4, name: 'About', url: 'about'},
    {id: 5, name: 'Nobel', url: 'nobel'},
];

export const NavBar = () => {
    const activeClassName = style.active;

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
                    </Toolbar>
                </Container>
            </AppBar>
            <main style={{overflow: 'hidden'}}>
                <Outlet/>
            </main>
        </>
    );
};