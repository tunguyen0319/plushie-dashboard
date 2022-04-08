import styled from 'styled-components';



const ProductCardStyles  = styled.div`
    margin: 2rem 0 0;
    max-width: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(44, 44, 44, .1);
    color: #2c2c2c;
    position: relative;

    & > section {
        padding: 1.5rem 1.5rem 4.5rem;
    }

    aside {
        display: flex;
        position: absolute;
        bottom: 1.5rem;
        right: 1.5rem;
    }
`;

const ProductImage  = styled.div`
    height: 260px;

    img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 40%;
    }
`;

const ProductName = styled.h3`
    font-size: 1.875rem;
    font-weight: 300;
`;

const ProductPrice  = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
    color: #FB7185;
    margin-bottom: 2rem;
`;

const ProductDescription  = styled.div`
    word-wrap: break-word;
    max-width: 100%;
`;


export { ProductCardStyles, ProductImage, ProductName, ProductPrice, ProductDescription }