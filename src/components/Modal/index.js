import style from './style.module.scss';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAvatar } from '../../actions/users';

import Loading from '../../components/Loading';

function Modal({active, setActive} ) {   //function Loading (props) { const { name } = props;

    const dispatch = useDispatch();  
    const user = useSelector(state =>  state.users.user);
    
    const uploadFile = async (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);   
        formData.append('id', user.user.id);
        const { data } = await axios.post('api/users/upload', formData)
        // console.log('img', data.payload.payload.avatar);
        const { avatar } = data.payload.payload;
        
        updateAvatar(dispatch, avatar);

        setActive(false);
    };


    return (
        <div className={ active ? style.modal : style.active } > 
            
            <div className={ active ? style.content : style.active } >
            
                <h2 className={ !active ? style.active : null } >Please upload your Avatar</h2>

                <form  onSubmit={uploadFile}>
                    <input type="file" name="avatar" className={ !active ? style.active : null } />
                    <Button variant="outlined" type="submit" className={ !active ? style.active : null } > Save </Button>
                </form>
            </div>

        </div>
    )
    
}

export default Modal;