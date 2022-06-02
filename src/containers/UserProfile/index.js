import style from './style.module.scss';
// import Button from '@mui/material/Button';

import { useState }  from 'react';

import Modal from '../../components/Modal';
// import UserHeader from '../../components/HeaderProfile';
import Meeting from '../../components/Forms/Meeting';

function UserProfile () {

    const [ modalActive, setModalActive ] = useState(true);



    return (
        <div >
            {/* <div>{ avatar ? <img src={`${avatar}`}  alt='avatar' /> 
                : <img src={`${avatar}`}  alt='avatar' /> }
            </div> */}

            {/* <UserHeader /> */}
            <Modal active={modalActive} setActive={setModalActive} />
            <Meeting />
            
            
        </div>
    );
};

export default UserProfile;