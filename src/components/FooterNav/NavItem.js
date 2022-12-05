import {
  NavLink
} from "react-router-dom";
import styled from "styled-components";

const FooterListItem = styled.li`
  padding: 0 0 7px;
`;


const NavbarLink = styled(NavLink)`
color: #fff;
font-size: 18px;
font-weight: 400;
text-decoration: none;

&:hover,
&:focus{
  opacity: 0.9;
}
&.active{
  font-weight: 700;
  opacity: 1;
}`;


const NavItem = ({children, url}) => {

  return (
    <FooterListItem>
      <NavbarLink
        activeClassName="active"
        to={url}>{children}</NavbarLink>
    </FooterListItem>
  );
};

export default NavItem;
