import './App.css';
import Header from './componet/Header/Header';
import AboutUs from './componet/AboutUs/AboutUs';
import Footer from './componet/Footer/Footer';
import ContactUs from './componet/ContactUs/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './componet/Dashboard/Dashboard';
import CSRActivity from './componet/CSRActivity/CSRActivity';
import Services from './componet/Services/Services';

function App() {
  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/gomti_infra_mining" element={<Dashboard />} />
        <Route path="/gomti_infra_mining/about" element={<AboutUs />} />
        <Route path="/gomti_infra_mining/services" element={<Services />} />
        <Route path="/gomti_infra_mining/certificate" element={<Services />} />
        <Route path="/gomti_infra_mining/csr-activity" element={<CSRActivity />} />
        <Route path="/gomti_infra_mining/contact" element={<ContactUs />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>


}

export default App;
