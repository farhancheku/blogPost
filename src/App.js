import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogDetails from "./components/blog-details";
import BlogPage from "./pages/blogPage";
import { useSelector } from "react-redux";

const App = () => {
  const data = useSelector((state) => state.blogs);
  console.log(data.allViews);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
