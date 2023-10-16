import './App.css';
import Header from './componet/Header/Header';
import AboutUs from './componet/AboutUs/AboutUs';
import Footer from './componet/Footer/Footer';
import ContactUs from './componet/ContactUs/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './componet/Dashboard/Dashboard';

function App() {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  </>


}

export default App;
