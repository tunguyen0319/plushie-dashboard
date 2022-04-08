import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.bc || "transparent"}; ;
    border: ${props => props.border || 'none'};;
    border-radius: ${props => props.radius || "3px"};;
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0.25rem 1.5rem"};;
    color: ${props => props.color || "grey"};
    font-size: ${props => props.fs || "1rem"};;
    width: ${props => props.width || "100%"};
    display: ${props => props.display || 'block'};;;

`;

const SubmitButton = styled(Button)`
    background-color: ${props => props.bgcolor || '#fda4af'};
    color: ${props => props.color || '#f8fafc'}; 
    font-weight: ${props => props.fw || '700'}; 
    font-size: ${props => props.fs || '14px'};
    outline: ${props => props.outline || 'none'};
    text-transform: ${props => props.texttransform || 'none'};;;
    letter-spacing: .5px;
`

const IconButton = styled.button`
    background-color: ${props => props.bc || "transparent"};
    border: ${props => props.border || 'none'};
    cursor: pointer;
    margin-left: .75rem;

    &:focus {
        outline: none;
    }
`;

const AdminButton = styled(Button)`
    align-self: end;
    padding: 0;
    margin-left: 1.25rem;
    cursor: pointer;

    svg {
        font-size: 1.5rem;
    }

    &:hover {
        color: #fda4af;
    }
`;


export { Button, SubmitButton, IconButton, AdminButton }