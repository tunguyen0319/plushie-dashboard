import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { BiMessageSquareError} from 'react-icons/bi';
import { IoMail, IoLockClosed } from 'react-icons/io5';
import { signInWithEmailAndPassword} from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth } from 'libs/firebase'
import {Label, Input} from 'ui/forms';
import { SubmitButton } from 'ui/buttons';
import { PageCardStyles, SignInForm, LabelIcon, DisplayPic, FormControl } from './styles';
import Logo from 'static/svg/branding/logowhite.svg';
import LoginHeroImg from 'static/images/loginheroimg.jpg';

// STATE
function LoginPage(props) {
    // start with state declaration
    const navigator = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <BiMessageSquareError/>
  
    });

    function onLoginRequest(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            // move dashboard page
            // useNavigate() react router
            navigator('dashboard')
        })
        .catch(error=>{
            notify(error)
        })
    }
    

    return ( 
        <>
            <PageCardStyles>
                <ToastContainer/>
                
                {/* Sign In Form */}
                <SignInForm>
                    <header>
                        <h1>Welcome to</h1>
                        <img src={Logo} alt='Plushie Logo'/>
                    </header> 

                    <form onSubmit={onLoginRequest}>
                        <FormControl>
                            <Label htmlFor='email' display="">Email</Label>
                            <LabelIcon><IoMail/></LabelIcon>
                            <Input type="email" id="email" placeholder='janedoe@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
                        </FormControl>

                        <FormControl>
                            <Label htmlFor='password'>Password</Label>
                            <LabelIcon><IoLockClosed/></LabelIcon>
                            <Input type="password" id="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                        </FormControl>

                        <SubmitButton type="submit" padding=".75rem 2.25rem" texttransform="lowercase" bgcolor="#FB7185" fs="1.125rem" width="fit-content">Sign In</SubmitButton>
                    </form>
                </SignInForm>

                {/* Display Picture */}
                <DisplayPic>
                    <img src={LoginHeroImg} alt='Mushroom Plusie Toy'/>
                </DisplayPic>

            </PageCardStyles>
        </>

     );
}

export default LoginPage;