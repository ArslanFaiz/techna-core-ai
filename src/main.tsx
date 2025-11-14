import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './components/layout/layout.tsx'
import Services from './pages/services.tsx'
import About from './pages/about.tsx'
import Blog from './pages/blog.tsx'
import { PremiumSection } from './features/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/form" element={<PremiumSection />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  </StrictMode>,
)
