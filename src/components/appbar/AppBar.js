import React from 'react';

import { IoEllipsisVerticalSharp, IoNotificationsOutline, IoMailOutline, IoPersonCircleOutline } from "react-icons/io5";

import { IconButton } from 'ui/buttons';
import { AppBarItem, AppBarItemGroup, AppBarItems, AppBarStyles } from './styles';

function AppBar(props) {
    return (  
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>Branding</AppBarItem>
                <AppBarItemGroup>
                    <IconButton>
                        <IoMailOutline size="1.25rem" color="grey"/>
                    </IconButton>

                    <IconButton>
                        <IoNotificationsOutline size="1.25rem" color="grey"/>
                    </IconButton>
                    
                    <IconButton>
                        <IoPersonCircleOutline size="2.5rem" color="grey"/>
                    </IconButton>

                    <IconButton>
                        <IoEllipsisVerticalSharp size="1.25rem" color="grey"/>
                    </IconButton>
                </AppBarItemGroup>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;