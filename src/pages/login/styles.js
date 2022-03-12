import styled from 'styled-components';

const PageCardStyles = styled.section`
  margin: 10rem auto;
  display: flex;
  font-family: 'Jost', sans-serif;
  line-height: 1;

  .Toastify__toast {
    background-color: tomato;
    color: #fff;
  }

  .Toastify__progress-bar--error {
    background-color: #fff;
  }
`;

const SignInForm = styled.div`
  background-color: #2C2C2C;
  color: #fff;
  padding: 3.75rem;
  width: 520px;
  border-radius: 20px 0 0 20px;
  margin: 0 0 0 auto;
  box-shadow: 0 5px 20px rgba(44, 44, 44, .25);

  h1 {
    font-size: 1.125rem;
    text-transform: lowercase;
    font-weight: 600;
    letter-spacing: 1.5px;
  }

  img {
    margin-top: 1.125rem;
  }
`;

const LabelIcon = styled.div`
  width: 36px;
  height: 36px;
  background-color: #FDA4AF;
  border-radius: 100%;
  position: absolute; 
  top: -1.125rem;
  right: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.125rem;
  }
`;

const DisplayPic = styled.div`
  width: 520px;
  height: 520px;
  margin: 0 auto 0 0;

  img {
    width: 520px;
    height: 100%;
    object-fit: cover;
    object-position: 0 -10rem;
    border-radius: 0 20px 20px 0;
    box-shadow: 0 5px 20px rgba(44, 44, 44, .25);
  }
`;

const FormControl = styled.div`
  margin: 2.75rem 0;
  position: relative;
`;

export {PageCardStyles, SignInForm, LabelIcon, DisplayPic, FormControl}