import styled from 'styled-components';
import Logo from "../Logo";
import {headerData} from '../../services/HeaderData';
import {NavItem, NavList} from "../Nav";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = () => {
  const {logoUrl, headerNavItems} = headerData;

  return (
    <HeaderContainer>
        <Logo logoUrl={logoUrl} />

        <NavList>
          {headerNavItems.map(item => <NavItem key={item.id} url={item.link}>{item.name}</NavItem>)}
        </NavList>
    </HeaderContainer>
  )
}

export default Header;
