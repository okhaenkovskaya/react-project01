import styled from "styled-components";

const HeaderNavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavList = ({children}) => {
  return (
    <HeaderNavList>
      {children}
    </HeaderNavList>
  );
};

export default NavList;
