import { useState, } from "react";
import "./App.css";
import "./style.scss";
import "./media-query.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./pages/Detail";
import AddEditBlog from "./pages/AddEditBlog";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import TagBlog from "./pages/TagBlog";
import CategoryBlog from "./pages/CategoryBlog";
import ScrollToTop from "./components/ScrollToTop";
import Blogs from "./pages/Blogs";

function App() {
  const [active, setActive] = useState("timeline");

  return (
    <div className="BlogApp">
      <Header
        setActive={setActive}
        active={active}

      />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home setActive={setActive} active={active} />}
        />
        <Route
          path="/search"
          element={<Home setActive={setActive} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail setActive={setActive} />}
        />
        <Route
          path="/create"
          element={<AddEditBlog />}
        />
        <Route
          path="/update/:id"
          element={
            <AddEditBlog setActive={setActive} />
          }
        />
        <Route path="/blogs" element={<Blogs setActive={setActive} />} />
        <Route path="/tag/:tag" element={<TagBlog setActive={setActive} />} />
        <Route path="/category/:category" element={<CategoryBlog setActive={setActive} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
