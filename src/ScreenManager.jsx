import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'

export default function ScreenManager() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {currentPage === 'home'    && <Hero    onNavigate={navigate} />}
        {currentPage === 'gallery' && <Gallery onNavigate={navigate} />}
        {currentPage === 'about'   && <About   onNavigate={navigate} />}
      </main>
      <footer className="bg-stone-900 text-stone-400 text-center py-6 text-sm">
        <p>© 2024 Maple · All Rights Reserved</p>
      </footer>
    </div>
  )
}
