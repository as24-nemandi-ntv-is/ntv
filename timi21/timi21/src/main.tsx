import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FramerMotion from './pages/framer-motion.tsx'
import CanvasConfettiPage from './components/animations/CanvasConfetti.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='/lucide-motion' element={<FramerMotion></FramerMotion>}></Route>
    <Route path='/lucide-react' element={<FramerMotion></FramerMotion>}></Route>
    <Route path='/canvas-confetti' element={<CanvasConfettiPage></CanvasConfettiPage>}></Route>
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
