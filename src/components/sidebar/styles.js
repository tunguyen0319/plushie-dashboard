import styled from 'styled-components';

const SidebarStyles = styled.div`
    box-shadow: 2px 0 2px -2px grey;
    background-color: #FB7185;
    position: relative;

    header {
        margin-bottom: 3rem;
    }

    img {
        max-wdith: 180px;
        padding: 3rem 2rem 0;
    }

`

const SideBarItems = styled.div`
    padding: 0 2rem;
`;

const SideBarItem = styled.div`
    display: flex;
    align-items: center;
    padding: 1.125rem 0;
    font-family: 'Jost', sans-serif;
    font-size: 1.25rem;
    color: ${props => props.color || "#fff"};

    svg {
        margin-right: .5rem;
        font-size: 1.125rem;
    }

    &:hover {
        color: #FDA4AF;
        cursor: pointer;
    }
`;

const SideBarLogOut = styled(SideBarItem)`
    position: absolute;
    bottom: 0;
    padding: 3rem 2rem;
    width: 100%;
    background-color: #2c2c2c;
`;

export { SidebarStyles, SideBarItems, SideBarItem, SideBarLogOut }