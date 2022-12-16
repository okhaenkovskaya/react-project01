import {Route, Routes} from "react-router-dom";

import {PrivateLayout, PublicLayout} from "../layout";
import HomePage from "../pages/home";
import PostPage from "../pages/post";
import NotFound from "../pages/notFound";
import ArchivePage from "../pages/archive";
import ContactPage from "../pages/contact";
import Dashboard from "../pages/dashboard/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage/>} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/posts/:postId" element={<PostPage />} />
        <Route exact path="/archive/:filter/:param" element={<ArchivePage />} />
        <Route exact path="*" element={<NotFound/>}/>
      </Route>
      <Route element={<PrivateLayout />}>
        <Route index path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
