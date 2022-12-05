import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import HomePage from './pages/home';
import NotFound from './pages/notFound';
import PostPage from "./pages/post";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/posts/:postId" element={<PostPage />} />
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
