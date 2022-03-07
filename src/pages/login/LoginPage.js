import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { BiMessageSquareError} from 'react-icons/bi';
import { signInWithEmailAndPassword} from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth } from 'libs/firebase'
import {Label, Input} from 'ui/forms';
import { SubmitButton } from 'ui/buttons';
import { LoginPageStyles, FormControl } from './styles';

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

            <LoginPageStyles>
                <ToastContainer/>
                <header>
                    <h1>Welcome Please Login</h1>
                </header> 

                <form onSubmit={onLoginRequest}>
                    <FormControl>
                        <Label htmlFor='email'>Email</Label>
                        <Input type="email" id="email" placeholder='janedoe@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
                    </FormControl>

                    <FormControl>
                        <Label htmlFor='password'>Password</Label>
                        <Input type="password" id="password" placeholder='password'onChange={(e)=>setPassword(e.target.value)}/>
                    </FormControl>

                    <FormControl>
                        <SubmitButton type="submit" padding=".75rem" bgcolor="orange" margin="1rem 0 0" fs="1rem">Log In to Dashboard</SubmitButton>
                    </FormControl>
                </form>

            </LoginPageStyles>
        </>

     );
}

export default LoginPage;