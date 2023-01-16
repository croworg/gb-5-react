import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

// import {auth} from "../store/profile/actions";
import {onSignUp} from '../services/firebase';

import {LinearProgress, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const SignUp = () => {
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
            await onSignUp(inputs.email, inputs.password);
            navigate('/signin');
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
                <Typography variant={'h5'}>Sign Up</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Typography>Email:</Typography>
                <TextField
                    type={'email'}
                    name={'email'}
                    size={'small'}
                    onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
                />
                <Typography>Password:</Typography>
                <TextField
                    type={'password'}
                    name={'password'}
                    size={'small'}
                    onChange={(e) => setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))}
                /><br/>
                <Typography color={'red'}>{error ? error : <br/>}</Typography>
                <Button variant={'contained'} color={'success'} type={'submit'}>SignUp</Button>
            </form>
            {loading && (
                <Box style={{margin: '1rem 0'}}>
                    <LinearProgress color="success"/>
                </Box>
            )}
        </div>

    );
};

export default SignUp;