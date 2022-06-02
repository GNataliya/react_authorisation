import style from './style.module.scss';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import HeaderProfile from '../HeaderProfile';

function Header(){

    const user = useSelector(state =>  state.users.user);
    console.log('user', user);
    // { !user ? <Header /> : <HeaderProfile /> }

    return(

        <div>

        { !user.user ?          

        (<div className={style.container}>

            <div className={style.img}>
                <NavLink to='/Main' >LOGO</NavLink>
                {/* <img src={pic} alt='logopic' className={style.img} /> */}
            </div>

            <ul className={style.headernav}>
                <li className={style.li}>
                    <Button variant="contained" size="medium" className={style.signin}>
                        <NavLink to='/signup' >Sign Up</NavLink>
                    </Button>
                </li>
                <li className={style.li}>
                    <Button variant="outlined" size="medium" className={style.login}>
                        <NavLink to='/login' >Log in</NavLink>
                    </Button>
                </li>        
            </ul>

        </div>)


        : <HeaderProfile /> } 

        </div>
        
    )
}

export default Header;