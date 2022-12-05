import styled from "styled-components";

const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavList = ({children}) => {
  return (
    <FooterNavList>
      {children}
    </FooterNavList>
  );
};

export default NavList;
