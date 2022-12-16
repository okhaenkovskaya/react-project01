import {Outlet} from "react-router-dom";


const PrivateLayout = () => {
  return (
    <div>
      <div>Sidebar</div>

      <Outlet />

    </div>
  );
};

export default PrivateLayout;
