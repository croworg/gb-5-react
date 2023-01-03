import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as types from '../store/profile/types'
import {changeName} from '../store/profile/actions'



const ProfilePage = () => {
    const name = useSelector((store) => store.name)
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    return (
        <>
            <h2>Profile Page</h2>
            <h2>{name}</h2>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {/* <button onClick={hendleChange}>Change name</button> */}
            <button onClick={() => dispatch(changeName(value))}>Change name</button>
        </>
    );
};

export default ProfilePage;