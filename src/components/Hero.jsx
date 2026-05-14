import mapleIcon from '../assets/maple.png'

export default function Hero({ onNavigate }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-stone-50 via-orange-50 to-amber-50">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-maple-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-amber-200 rounded-full opacity-25 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-100 rounded-full opacity-30 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-maple-600 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Illustration Portfolio
          </p>
          <h1 className="text-6xl sm:text-7xl font-bold text-stone-900 leading-tight mb-6">
            Maple
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed mb-3 max-w-md mx-auto md:mx-0">
            イラストレーターとして、想像と感情を絵に込めています。
          </p>
          <p className="text-stone-500 text-base leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
            キャラクター、風景、抽象画など様々なジャンルの作品をご覧ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-3 bg-maple-600 hover:bg-maple-700 text-white rounded-full font-medium text-sm tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              ギャラリーを見る
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3 border border-stone-300 hover:border-maple-400 text-stone-700 hover:text-maple-600 rounded-full font-medium text-sm tracking-wide transition-all"
            >
              私について
            </button>
          </div>
        </div>

        {/* Decorative image cluster */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="absolute w-72 h-72 bg-maple-100 rounded-full opacity-50" />
          <img
            src={mapleIcon}
            alt="Maple"
            className="relative w-48 h-48 object-contain drop-shadow-xl opacity-80"
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-xs text-stone-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-stone-400 animate-pulse" />
      </div>
    </section>
  )
}
