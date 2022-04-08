import styled from 'styled-components';

const PanelStyles = styled.section`
  margin: 0 2rem;
`;

const PanelHeader = styled.header`
  h2 {
    font-family: 'Jost', sans-serif;
    font-weight: 200;
    font-size: 3rem;
    text-transform: capitalize;
  }
`;

const PanelBody = styled.div`
  & > section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.25rem;
  }
  
`;

export { PanelStyles, PanelHeader, PanelBody }