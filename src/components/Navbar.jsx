import { useState } from 'react'
import mapleIcon from '../assets/maple.png'

const navLinks = [
  { id: 'home',    label: 'ホーム' },
  { id: 'gallery', label: 'ギャラリー' },
  { id: 'about',   label: '私について' },
]

export default function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 group"
        >
          <img src={mapleIcon} alt="Maple" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold tracking-wide text-stone-800 group-hover:text-maple-600 transition-colors">
            Maple
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === id
                  ? 'text-maple-600 border-b-2 border-maple-500 pb-0.5'
                  : 'text-stone-600 hover:text-maple-600'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`block w-5 h-0.5 bg-stone-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-stone-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-stone-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-stone-100 px-4 py-3 flex flex-col gap-3">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`text-left py-2 text-sm font-medium transition-colors ${
                currentPage === id ? 'text-maple-600' : 'text-stone-700 hover:text-maple-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
