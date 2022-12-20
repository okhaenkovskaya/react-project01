import {Route, Routes} from "react-router-dom";

import {PrivateLayout, PublicLayout} from "../layout";
import HomePage from "../pages/home";
import PostPage from "../pages/postSingle";
import NotFound from "../pages/notFound";
import ArchivePage from "../pages/archive";
import ContactPage from "../pages/contact";
import Dashboard from "../pages/dashboard/Dashboard";
import Tasks from "../pages/tasks";
import Posts from "../pages/posts";


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
        <Route index path="/dashboard/tasks" element={<Tasks />} />
        <Route index path="/dashboard/posts" element={<Posts />} />
      </Route>
    </Routes>
  );
};

export default Router;
