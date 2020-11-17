import React from 'react';

import './navbar.styles.scss';

import {ReactComponent as Logo} from '../../assets/ryval.svg';
import {ReactComponent as UserSvg} from '../../assets/user.svg';

const NavBar = () => {

    return(
        <nav className='navbar'>
            <Logo className='logo'/>
            <div className='profile-container'>
                <UserSvg className='user-logo'/>
                <span className='login-txt'>Log in</span>
            </div>
        </nav>
                
    )
};
export default NavBar;