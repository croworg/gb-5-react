import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeName, toggleProfile} from '../store/profile/actions'
import {selectName, selectVisible} from "../store/profile/selector";
import Button from "@mui/material/Button";
import {Checkbox, TextField} from "@mui/material";

export const ProfilePage = () => {
    const name = useSelector(selectName);
    const visible = useSelector(selectVisible);

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    return (
        <div style={{ margin: '1rem'}}>
            <h2>Profile Page</h2>
            <br/>
            <label>Username: </label><span style={{ fontWeight: '700' }}>{name}</span>
            <div>
                <Checkbox size="small" checked={visible}/>
                {/*<input type="checkbox" checked={visible} />*/}
                <Button color={'success'} size={'small'} variant={'contained'} onClick={() => dispatch(toggleProfile())}>Change visible</Button>
                {/*<button onClick={() => dispatch()}>Change visible</button>*/}
            </div>
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
                <Button color={'success'} size={'small'} variant={'contained'} onClick={() => dispatch(changeName(value))}>Change name</Button>
            </div>
        </div>
    );
};