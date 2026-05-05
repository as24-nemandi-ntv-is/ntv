import { useState } from 'react'
import './App.css'
import { Aefingar } from './pages/aefingar';

type Page = "home" | "tímaverkefni"
function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="app-shell">
      <nav className='app-nav'>
        <button
          className={page === "home" ? "nav-btn nav-btn-active" : "nav-btn"}
          onClick={() => setPage("home")}
        >
          Heim
        </button>
        <button 
          className={
            page === "tímaverkefni" ? "nav-btn nav-btn-active" : "nav-btn"
          }
        >
          Tímaverkefni
        </button>
      </nav>
      <main className="app-main">
        {page === "home" ? <Aefingar/> : <Timaverkefni/>}
        </main>    
    </div>
  )
}

export default App
