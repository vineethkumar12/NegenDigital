import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/HomePage.jsx'
import Capabilities from './pages/CapabilitiesPage.jsx'
import Services from './pages/ServicesPage.jsx'
import About from './pages/AboutPage.jsx'
import Careers from './pages/CareersPage.jsx'
import PrivacyPolicy from './pages/PrivacyPolicyPage.jsx'
import TermsOfService from './pages/TermsOfServicePage.jsx'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main className="overflow-x-clip">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
