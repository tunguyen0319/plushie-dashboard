import styled from 'styled-components';



const ProductPreviewStyles  = styled.div`
    width: 45%;
    background-color: #2c2c2c;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(44, 44, 44, .25);

    section {
        padding: 1.5rem 1.5rem 2.5rem;
        color: #fff;
    }
    
`;

const ProductImage = styled.div`
    width: 100%;
    height: 360px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-posion: top;
        border-radius: 10px 10px 0 0;
    }
`;

const ProductName  = styled.h2`
    font-size: 2rem;
    font-weight: 300;
`;

const ProductPrice  = styled.p`
    font-size: 1.675rem;
    font-weight: 400;
    color: #fda4af;
    margin-bottom: 2rem;
`;

const ProductDescription  = styled.div`
    word-wrap: break-word;
    max-width: 100%;
`;




export {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription}