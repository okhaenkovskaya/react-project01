import {
  Routes,
  Route
} from "react-router-dom";
import './assets/styles/App.css';
import Header from "./components/Header";
import HomePage from './pages/home';
import NotFound from './pages/notFound';
import PostPage from "./pages/post";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route index element={<HomePage/>} />
        <Route exact path="/posts/:postId" element={<PostPage />} />
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
