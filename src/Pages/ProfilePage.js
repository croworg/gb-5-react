import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeName, toggleProfile} from '../store/profile/actions'
import {selectName, selectVisible} from "../store/profile/selector";
import {Button} from "../components/ui/Button/Button";
import {Checkbox, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";

export const ProfilePage = () => {
    const name = useSelector(selectName);
    const visible = useSelector(selectVisible);

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    return (
        <div className={'page-wrapper'}>
            <Box sx={{marginBottom: '1rem'}}>
                <Typography variant={'h5'}>Profile Page</Typography>
            </Box>
            <label>Username: </label><span style={{ fontWeight: '700' }}>{name}</span>
            <Box sx={{margin: '1rem 0'}}>
                <Checkbox size="small" checked={visible}/>
                {/*<input type="checkbox" checked={visible} />*/}
                <Button onClick={() => dispatch(toggleProfile())}>Change visible</Button>
                {/*<button onClick={() => dispatch()}>Change visible</button>*/}
            </Box>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center'}}>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    size={'small'}
                    // sx={{ m: 1 }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {/*<TextField id="filled-basic" label="Filled" variant="filled" />*/}
                {/*<TextField id="standard-basic" label="Standard" variant="standard" />*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    value={value}*/}
                {/*    onChange={(e) => setValue(e.target.value)}*/}
                {/*/>*/}
                {/* <button onClick={hendleChange}>Change name</button> */}
                <Button onClick={() => dispatch(changeName(value))}>Change name</Button>
            </div>
        </div>
    );
};