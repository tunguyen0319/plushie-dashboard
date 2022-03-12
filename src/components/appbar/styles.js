import styled from 'styled-components';

const AppBarStyles = styled.nav`
  position: relative;
  padding: 2rem;
  background-color:${props => props.bgcolor || "transparent"};
`;

const AppBarItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: fit-content;
  margin: 0 0 0 auto;
`;


export {AppBarStyles, AppBarItems}