import {
  NavLink
} from "react-router-dom";
import styled from "styled-components";

const NavListItem = styled.li`
  margin: 0 0 0 10px;
`;


const NavbarLink = styled(NavLink)`
color: #F2F2F2;
font-size: 18px;
font-weight: 400;
text-decoration: none;
opacity: 0.5;

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
    <NavListItem>
      <NavbarLink
        activeclassname="active"
        to={url}>{children}</NavbarLink>
    </NavListItem>
  );
};

export default NavItem;
