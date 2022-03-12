import React from 'react';

import { IoNotificationsSharp, IoChatbubbleEllipsesSharp, IoPersonSharp, IoSettingsSharp } from "react-icons/io5";

import { IconButton } from 'ui/buttons';
import { AppBarItems, AppBarStyles } from './styles';

function AppBar(props) {
    return (  
        <AppBarStyles>
            <AppBarItems>
                <IconButton>
                    <IoNotificationsSharp size="1.5rem" color="#FDA4AF"/>
                </IconButton>

                <IconButton>
                    <IoChatbubbleEllipsesSharp size="1.5rem" color="#FDA4AF"/>
                </IconButton>
                
                <IconButton>
                    <IoPersonSharp size="1.5rem" color="#FDA4AF"/>
                </IconButton>

                <IconButton>
                    <IoSettingsSharp size="1.5rem" color="#FDA4AF"/>
                </IconButton>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;