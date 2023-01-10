import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {NavLink, Outlet} from "react-router-dom";

const menuItems = [
    {id: 1, name: 'Main', url: ''},
    {id: 2, name: 'Profile', url: 'profile'},
    {id: 3, name: 'Chats', url: 'chats'},
    {id: 4, name: 'About', url: 'about'}
];

export const NavBar = () => {
    return (
        <>
            <AppBar position="static" style={{background: '#360568'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex'}}}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.id}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    <NavLink
                                        style={({isActive}) => ({
                                            color: isActive ? '#7785AC' : '#A5E6BA',
                                            textDecoration: 'none',
                                        })}
                                        to={item.url}
                                    >
                                        {item.name}
                                    </NavLink>
                                </Button>
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