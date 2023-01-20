import React from 'react';
import MuiButton from "@mui/material/Button";

export const Button = (props) => {
    return (
        <>
            <MuiButton
                style={{color: 'white'}}
                color={'success'}
                size={'small'}
                variant={'contained'}
                {...props}
            >{props.children}</MuiButton>
        </>
    );
};
