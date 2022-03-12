import styled from 'styled-components';

const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-family: 'Jost', sans-serif;
    font-size: 18px;
    color: #fff;
    display: none;
`;
const Input = styled.input`
    width: ${props => props.width || "100%"};
    border:none;
    border-radius: 3px;
    font-family: 'Jost', sans-serif;
    font-size:1.125rem;
    padding: 1.125rem 0.75rem;

    ::placeholder{
        font-size: 1.125rem;
        color: #B6B6B6;
        font-style: italic;
        font-weight: 300;
        letter-spacing: 1px;
    }
    :focus{
        // background-color:  rgb(241 245 249);
    }
`;


export{Input, Label} ;