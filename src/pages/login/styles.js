import styled from 'styled-components';

const LoginPageStyles = styled.section`
  margin: 4rem auto;
  max-width: 75%;

  header {
      font-size: 1.5rem;
      text-align: center;
  }

  .Toastify__toast {
    background-color: tomato;
    color: #fff;
  }

  .Toastify__progress-bar--error {
    background-color: #fff;
  }
`;

const FormControl = styled.div`
  margin: 1rem 0;
`;

export {LoginPageStyles, FormControl}