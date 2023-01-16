import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

export const MainPage = () => {
    return (
        <div className={'page-wrapper'}>
            <Box sx={{marginBottom: '1rem'}}>
                <Typography variant={'h5'}>Main Page</Typography>
            </Box>
        </div>
    );
};