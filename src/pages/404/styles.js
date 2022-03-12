import styled from 'styled-components';

const PageNotFoundStyles = styled.section`
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

    h2 {
        font-size: 5rem;
        text-transform: uppercase;
        font-weight: 200;
        letter-spacing: 1.5px;
        line-height: .5;
        margin-top: .75rem;
    }

    span {
        line-height: 1;
    }

    p {
        margin: 1.5rem 0 2.75rem;
        line-height: 1.25;
    }


    a {
        color: #fff;
    }
`;

export { PageNotFoundStyles }