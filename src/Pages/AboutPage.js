import {connect} from "react-redux";
import React, {useState} from 'react';
import {changeName, toggleProfile} from '../store/profile/actions'

import Button from "@mui/material/Button";
import {Checkbox, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const AboutPage = (props) => {
    const [value, setValue] = useState('');

    return (
        <div className={'page-wrapper'}>
            <Box sx={{marginBottom: '1rem'}}>
                <Typography variant={'h5'}>About Page</Typography>
            </Box>
            <label>Username: </label><span style={{fontWeight: '700'}}>{props.name}</span>
            <Box sx={{margin: '1rem 0'}}>
                <Checkbox size="small" checked={props.visible}/>
                <Button
                    color={'success'}
                    size={'small'}
                    variant={'contained'}
                    onClick={() => props.toggle()}
                >
                    Change visible
                </Button>
            </Box>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    size={'small'}
                    // sx={{ m: 1 }}
                    value={props.value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button color={'success'} size={'small'} variant={'contained'} onClick={() => props.changeName(value)}>Change
                    name</Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    name: state.profile.name,
    visible: state.profile.visible
});

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleProfile()),
    changeName: value => dispatch(changeName(value))
});

export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(AboutPage);