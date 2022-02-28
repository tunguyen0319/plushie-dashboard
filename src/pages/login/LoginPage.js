import React, {useState} from 'react';
import styled from 'styled-components';

import {auth} from '../../libs/firebase'
import {Label, Input} from '../../ui/forms';
import { SubmitButton } from '../../ui/buttons';

const LoginPageStyles = styled.section`
  margin: 4rem auto;
  max-width: 75%;

  header {
      font-size: 1.5rem;
      text-align: center;
  }
`;

const FormControl = styled.div`
  margin: 1rem 0;
`;

// STATE
function LoginPage(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onLoginRequest(e){
        e.preventDefault();
        console.log(password)
    }
    

    return ( 
        <>

            <LoginPageStyles>
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