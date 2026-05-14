import { useState } from 'react'
import { illustrations, categories } from '../data/illustrations'
import ImageModal from './ImageModal'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const filtered = activeCategory === 'all'
    ? illustrations
    : illustrations.filter((il) => il.category === activeCategory)

  const openModal = (index) => setSelectedIndex(index)
  const closeModal = () => setSelectedIndex(null)
  const prevImage = () => setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length)
  const nextImage = () => setSelectedIndex((i) => (i + 1) % filtered.length)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-stone-800 mb-3">ギャラリー</h2>
        <p className="text-stone-500">これまでの作品をご覧ください</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium border transition-all ${
              activeCategory === id
                ? 'bg-maple-600 border-maple-600 text-white shadow-sm'
                : 'border-stone-300 text-stone-600 hover:border-maple-400 hover:text-maple-600'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((illustration, index) => (
          <div
            key={illustration.id}
            className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            onClick={() => openModal(index)}
          >
            <img
              src={illustration.thumbnail}
              alt={illustration.title}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white font-semibold text-base">{illustration.title}</p>
              {illustration.year && (
                <p className="text-white/70 text-xs mt-0.5">{illustration.year}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-stone-400 py-20">作品がありません</p>
      )}

      {/* Modal */}
      {selectedIndex !== null && (
        <ImageModal
          image={filtered[selectedIndex]}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}
