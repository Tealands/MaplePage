import mapleIcon from '../assets/maple.png'

const socialLinks = [
  { label: 'Twitter / X', href: '#', icon: '𝕏' },
  { label: 'Pixiv',       href: '#', icon: 'P' },
  { label: 'Instagram',   href: '#', icon: '◎' },
]

const skills = ['デジタルイラスト', 'キャラクターデザイン', '風景画', 'ファンアート', 'コンセプトアート']

export default function About({ onNavigate }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-stone-800 mb-3">私について</h2>
        <div className="w-12 h-1 bg-maple-500 mx-auto rounded-full" />
      </div>

      <div className="flex flex-col sm:flex-row gap-10 items-start">
        {/* Avatar */}
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <div className="w-36 h-36 rounded-full bg-maple-100 flex items-center justify-center shadow-inner overflow-hidden border-4 border-maple-200">
            <img src={mapleIcon} alt="Maple" className="w-20 h-20 object-contain opacity-70" />
          </div>
        </div>

        {/* Bio */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-2xl font-bold text-stone-800 mb-1">Maple</h3>
          <p className="text-maple-600 text-sm font-medium mb-4">イラストレーター</p>
          <p className="text-stone-600 leading-relaxed mb-4">
            はじめまして、Mapleです。デジタルイラストを主に描いています。
            自然の美しさや人間の感情を、色と線で表現することが好きです。
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            キャラクターデザインから風景画まで、幅広いジャンルの作品を制作しています。
            お気軽にご覧ください。
          </p>

          {/* Skills */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-stone-700 mb-3 uppercase tracking-wider">スキル</p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-maple-50 text-maple-700 border border-maple-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-stone-700 mb-3 uppercase tracking-wider">SNS</p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-stone-300 hover:border-maple-500 hover:text-maple-600 flex items-center justify-center text-stone-500 transition-colors text-sm font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="px-8 py-3 bg-maple-600 hover:bg-maple-700 text-white rounded-full font-medium text-sm tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            作品を見る
          </button>
        </div>
      </div>
    </div>
  )
}
