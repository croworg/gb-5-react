import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {auth} from "../store/profile/actions";

import {LinearProgress, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {onSignIn} from "../services/firebase";

const SignIn = () => {
    const [inputs, setInputs] = useState({email: '', password: ''});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        setError('');
        try {
            await onSignIn(inputs.email, inputs.password);
            dispatch(auth(true));
            navigate('/chats');
        } catch (e) {
            setError(e.message);
            setInputs({email: '', password: ''});
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={'page-wrapper'}>
            <Box sx={{marginBottom: '1rem'}}>
                <Typography variant={'h5'}>Sign In</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Typography>Email:</Typography>
                <TextField
                    name={'email'}
                    size={'small'}
                    value={inputs.email}
                    onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
                />
                <Typography>Password:</Typography>
                <TextField
                    name={'password'}
                    size={'small'}
                    type={'password'}
                    value={inputs.password}
                    onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
                /><br/>
                <Typography color={'red'}>{error ? error : <br/>}</Typography>
                <Button variant={'contained'} color={'success'} type={'submit'}>login</Button>
            </form>
            {loading && (
                <Box style={{margin: '1rem 0'}}>
                    <LinearProgress color="success"/>
                </Box>
            )}
        </div>
    );
};

export default SignIn;