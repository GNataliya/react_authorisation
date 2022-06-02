import style from './style.module.scss';
import Button from '@mui/material/Button';
import { useState } from 'react';
import avatarIcon from './img.png'
import { NavLink } from 'react-router-dom'; 
import { useSelector } from 'react-redux';


function HeaderProfile(){

    // const [ avatar, setAvatar ] = useState(avatarIcon);

    const user = useSelector(state =>  state.users.user);
    console.log('user headerProfile', user)

    return(

        <div className={style.container}>
            {/* <div>{ avatar ? <img src={`${avatar}`}  alt='avatar' /> 
                : <img src={`${avatar}`}  alt='avatar' />  }
            </div> */}

            <div className={style.img}>
                <NavLink to='/Main' >LOGO</NavLink>
                {/* <img src={pic} alt='logopic' className={style.img} /> */}
            </div>


            <div className={style.userBox}>
            
                { user.user.id ? 
                // <NavLink to='/login' >login</NavLink> :
                    (<div>
                        { !user.user.avatar ? 
                        (<img src={avatarIcon} alt='avatar' className={style.avatar} />) : 
                        (<NavLink to='/userProfile' >
                            <img src={user.user.avatar} alt='avatar' className={style.avatar} />
                        </NavLink>) 
                         }
                    </div>)

                    : (<NavLink to='/login' >login</NavLink>)
                }
                
                <div className={style.logout}>
                    <Button variant="outlined" size="medium" >
                        <NavLink to='/logout' >Logout</NavLink>
                    </Button>
                </div>
                
            </div>
        </div>
    )
}

export default HeaderProfile;