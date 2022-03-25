import styled from 'styled-components';

const Label = styled.label`
    width: ${props => props.width || "100%"};
    font-family: 'Jost', sans-serif;
    font-size: 1.125rem;
    color: #fff;
    display: none;
`;

const AddNewLabel = styled.label`
    font-size: 1rem;
    font-family: 'Jost', sans-serif;
    color: #fda4af;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: .5px;
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

const Textarea = styled.textarea`
    width: ${props => props.width || "100%"};
    display: block;
    font-family: 'Jost', sans-serif;
    font-size: 1.125rem;
    padding: 1.125rem 0.75rem;

    ::placeholder{
        font-size: 1.125rem;
        color: #B6B6B6;
        font-style: italic;
        font-weight: 300;
        letter-spacing: 1px;
    }

`;



export{Input, AddNewLabel, Label, Textarea} ;