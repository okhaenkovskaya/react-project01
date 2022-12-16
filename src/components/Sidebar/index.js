import {NavItem, NavList} from "../Nav";
import {DashboardData} from "../../data/DashboardData";

const Sidebar = () => {
  const {navItems} = DashboardData;



  return (
    <div>

      <NavList>
        {navItems.map(item => <NavItem key={item.id} url={item.link}>{item.name}</NavItem>)}
      </NavList>
    </div>
  );
};

export default Sidebar;
