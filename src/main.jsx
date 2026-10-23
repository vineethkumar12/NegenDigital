import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.jsx'
import './index.css'
import ParticleSetup from './components/ParticleSetup.jsx'
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
  disable: () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParticleSetup>
      <HashRouter>
        <App />
      </HashRouter>
    </ParticleSetup>
  </React.StrictMode>
)