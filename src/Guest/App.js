import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MailList from "./components/mailList/MailList";
import { Route, Routes } from "react-router-dom";
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
        </Routes>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
