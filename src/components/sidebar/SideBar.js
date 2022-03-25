import React from 'react';

import { signOut } from 'firebase/auth';
import { IoGridSharp, IoPricetags, IoFolderSharp, IoBagSharp, IoStatsChart, IoSparklesSharp, IoPeopleSharp, IoLogOutSharp } from "react-icons/io5"

import { auth } from 'libs/firebase';
import Logo from 'static/svg/branding/logowhite.svg'
import { SidebarStyles, SideBarItems, SideBarItem, SideBarLogOut } from './styles'

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

            <ProductOptions/>

            {/* <SideBarItems>
                <SideBarItem color="#2c2c2c">
                    <IoGridSharp/>
                    Dashboard
                </SideBarItem>

                <SideBarItem>
                    <IoPricetags/>
                    Products
                </SideBarItem>

                <SideBarItem>
                    <IoFolderSharp/>
                    Categories
                </SideBarItem>

                <SideBarItem>
                    <IoBagSharp/>
                    Orders
                </SideBarItem>
                    
                <SideBarItem>
                    <IoStatsChart/>
                    Analytics
                </SideBarItem>

                <SideBarItem>
                    <IoSparklesSharp/>
                    Discounts
                </SideBarItem>

                <SideBarItem>
                    <IoPeopleSharp/>
                    Members
                </SideBarItem>
            </SideBarItems> */}
            
            <SideBarLogOut className="content" onClick={onLogOutRequest}>
                <IoLogOutSharp/>
                Log Out
            </SideBarLogOut>

        </SidebarStyles>
        
     );
}

export default SideBar;