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
        <Route path="/gomti_infra_mining" element={<AboutUs />} />
        <Route path="/gomti_infra_mining/about" element={<AboutUs />} />
        <Route path="/gomti_infra_mining/services" element={<AboutUs />} />
        <Route path="/gomti_infra_mining/certificate" element={<AboutUs />} />
        <Route path="/gomti_infra_mining/csr-activity" element={<AboutUs />} />
        <Route path="/gomti_infra_mining/contact" element={<ContactUs />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>


}

export default App;
