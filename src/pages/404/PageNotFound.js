import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from 'libs/firebase';
import { SubmitButton } from 'ui/buttons';
import { PageCardStyles, DisplayPic } from 'pages/login/styles';
import { PageNotFoundStyles } from './styles'
import PageNotFoundHeroImg from 'static/images/404heroimg.jpg';

function PageNotFound(props) {
    
    const [isUser, setIsUser] = useState(false)

    onAuthStateChanged(auth, user=>{
        if(user){
            setIsUser(true)
        }
        else{
            setIsUser(false)

        }
    })
    
    
    return ( 
        <>
            <PageCardStyles>
                {/* 404 info */}
                <PageNotFoundStyles>
                    <header>
                        <h1>404 error </h1>
                        <h2><span>Oops</span><br/>.<br/>.<br/>.</h2>
                    </header>

                    <p>It seems like what you are looking for is not existed. Let's get you back to a better spot.</p>

                    <SubmitButton padding=".75rem 2.25rem" texttransform="lowercase" bgcolor="#FB7185" color="#fff" fs="1.125rem" width="fit-content">
                    {
                        isUser? <Link to='/dashboard'>Back to Safety</Link> : <Link to='/'>Back to Safety</Link>
                    }
                    </SubmitButton>
                </PageNotFoundStyles>

                {/* display hero img */}
                <DisplayPic>
                    <img src={PageNotFoundHeroImg} alt='Potato Plusie Toy'/>
                </DisplayPic>
            </PageCardStyles>
            
             
        </>

     );
}

export default PageNotFound;