import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";


const PrivateLayout = () => {
  return (
    <div>
      <Header/>

      <div>
        <Sidebar />

        <Outlet />
      </div>

      <Footer />

    </div>
  );
};

export default PrivateLayout;
