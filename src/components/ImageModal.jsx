import { useEffect } from 'react'

export default function ImageModal({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white text-3xl leading-none"
          aria-label="閉じる"
        >
          ×
        </button>

        {/* Image */}
        <div className="relative w-full flex items-center justify-center">
          <button
            onClick={onPrev}
            className="absolute left-0 sm:-left-14 z-10 text-white/70 hover:text-white text-4xl font-thin px-3 py-2 transition-colors"
            aria-label="前の作品"
          >
            ‹
          </button>

          <img
            src={image.src}
            alt={image.title}
            className="max-h-[75vh] w-auto rounded-lg shadow-2xl object-contain"
          />

          <button
            onClick={onNext}
            className="absolute right-0 sm:-right-14 z-10 text-white/70 hover:text-white text-4xl font-thin px-3 py-2 transition-colors"
            aria-label="次の作品"
          >
            ›
          </button>
        </div>

        {/* Info */}
        <div className="text-center text-white">
          <h3 className="text-xl font-semibold">{image.title}</h3>
          {image.description && (
            <p className="text-white/70 text-sm mt-1">{image.description}</p>
          )}
          {image.year && (
            <p className="text-white/50 text-xs mt-1">{image.year}</p>
          )}
        </div>
      </div>
    </div>
  )
}
