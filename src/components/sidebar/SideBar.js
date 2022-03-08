import React, { forwardRef } from 'react';

import { signOut } from 'firebase/auth';
import { auth } from 'libs/firebase';
import { Button } from 'ui/buttons'
import {SidebarStyles} from './styles'


function SideBar($prop) {

    function onLogOutRequest(e){
        signOut(auth)
    }

    return ( 
        <SidebarStyles>
            <header>
                <h1>Side Bar</h1>
            </header>
            <div className="content">
                <Button onClick={onLogOutRequest}>Log Out</Button>
            </div>
        </SidebarStyles>
        
     );
}

export default SideBar;