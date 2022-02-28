import React from 'react';
import { AppBar } from './../../components/appbar';
import { Link } from 'react-router-dom';

function DashBoardPage(props) {
    return ( 
        <>
         <nav>
                <ul>
                    <li>
                        <Link to="/">Log out</Link>
                    </li>
                </ul>
            </nav>
            <AppBar/>
        </>

     );
}

export default DashBoardPage;