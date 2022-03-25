import styled from 'styled-components';

const SidebarStyles = styled.div`
    box-shadow: 2px 0 2px -2px grey;
    background-color: #FB7185;
    position: relative;

    header {
        margin-bottom: 4rem;
    }

    img {
        max-wdith: 180px;
        padding: 3rem 2rem 0;
    }

`

const SideBarItems = styled.div`
    
`;

const SideBarItem = styled.div`
    display: flex;
    align-items: center;
    padding: .75rem 2rem;
    color: ${props => props.color || "#fff"};
    
    svg {
        margin-right: .75rem;
        font-size: 1.125rem;
    }
    
    a {
        font-family: 'Jost', sans-serif;
        font-size: 1.25rem;
        display: block;
        color: ${props => props.color || "#fff"};
    }

    &:hover {
        color: #FDA4AF;
        cursor: pointer;

        a {
            text-decoration: none;
            color: #FDA4AF;
        }
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