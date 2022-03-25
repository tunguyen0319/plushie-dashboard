import styled from 'styled-components';



const ProductDataEntryFormStyles  = styled.form`
    width: 55%;

    input,
    textarea {
        padding: .75rem;
        border-radius: 5px;
        border: 1px solid #c2c2c2; 

        &:focus {
            outline: none;
        }
    }

    div {
        margin-bottom: 2rem;
    }

`;

const ProductImage = styled.div`

`;

const ProductName = styled.div`
`;

const ProductPrice = styled.div`
`;

const ProductDescription = styled.div`

`;  


export {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription}