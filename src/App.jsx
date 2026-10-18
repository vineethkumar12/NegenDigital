import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/HomePage.jsx'
import Services from './pages/ServicesPage.jsx'
import About from './pages/AboutPage.jsx'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main className="overflow-x-clip">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
