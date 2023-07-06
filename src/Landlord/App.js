import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MailList from "./components/mailList/MailList";
import { Route, Routes } from "react-router-dom";
import AddProperty from "./pages/Property/AddProperty";
import ViewProperty from "./pages/Property/ViewProperty";
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
          <Route path="/AddProperty" element={<AddProperty />} />
          <Route path="/ViewProperty" element={<ViewProperty />} />
        </Routes>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
