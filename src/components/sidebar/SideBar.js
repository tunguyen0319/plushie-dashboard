import React from 'react';

import { signOut } from 'firebase/auth';
import { IoLogOutSharp } from "react-icons/io5"

import { auth } from 'libs/firebase';
import Logo from 'static/svg/branding/logowhite.svg'
import { SidebarStyles, SideBarItems, SideBarLogOut } from './styles'

import ProductOptions from './ProductOptions';


function SideBar($prop) {

    function onLogOutRequest(e){
        signOut(auth)
    }

    return ( 
        <SidebarStyles>
            <header>
                <img src={Logo} alt='Plushie Logo'/>
            </header>

            <SideBarItems>
                <ProductOptions/>
            </SideBarItems>
        
            <SideBarLogOut className="content" onClick={onLogOutRequest}>
                <IoLogOutSharp/>
                Log Out
            </SideBarLogOut>

        </SidebarStyles>
        
     );
}

export default SideBar;