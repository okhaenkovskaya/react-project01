import {NavItem, NavList} from "../Nav";
import {DashboardData} from "../../data/DashboardData";
import Avatar from "../Avatar";

const Sidebar = () => {
  const {navItems} = DashboardData;

console.log(navItems, 'navItems')

  return (
    <>
      <Avatar />
      <NavList  direction='column'>
        {navItems.map(item => <NavItem key={item.id} url={item.link} svg={item.svg}>{item.name}</NavItem>)}
      </NavList>
    </>
  );
};

export default Sidebar;
