import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/home";
import PostPage from "../pages/post";
import NotFound from "../pages/notFound";
import Layout from "../layout";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route exact path="/posts/:postId" element={<PostPage />} />
        <Route exact path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default Router;
