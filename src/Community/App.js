import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MailList from "./components/mailList/MailList";
import { Route, Routes } from "react-router-dom";
import AddPost from "./pages/Property/AddPost";
import ViewPost from "./pages/Property/ViewPost";
import Properties from "../Properties";

function App() {
 
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Routes>
          <Route path="/" element={
            <Properties/>
          } />
          <Route path="/AddPost" element={<AddPost />} />
          <Route path="/ViewPost" element={<ViewPost />} />
        </Routes>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
