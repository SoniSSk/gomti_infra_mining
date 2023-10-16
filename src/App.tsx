import './App.css';
import AboutUs from './componet/AboutUs/AboutUs';
import Footer from './componet/Footer/Footer';
import ContactUs from './componet/ContactUs/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './componet/Dashboard/Dashboard';
import CSRActivity from './componet/CSRActivity/CSRActivity';
import Services from './componet/Services/Services';
import Certificates from './componet/Certificates/Certificates';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/gomti_infra_mining" element={<Dashboard />} />
        <Route path="/gomti_infra_mining/about" element={<AboutUs />} />
        <Route path="/gomti_infra_mining/services" element={<Services />} />
        <Route path="/gomti_infra_mining/certificate" element={<Certificates />} />
        <Route path="/gomti_infra_mining/csr-activity" element={<CSRActivity />} />
        <Route path="/gomti_infra_mining/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>


}

export default App;
