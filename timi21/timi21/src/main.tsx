import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FramerMotion from './pages/framer-motion.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
    </Route>
    <Route path='/framer-motion' element={<FramerMotion></FramerMotion>}></Route>
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
