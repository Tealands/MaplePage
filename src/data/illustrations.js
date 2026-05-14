import dummy1 from '../assets/dummy1.png'
import dummy2 from '../assets/dummy2.jpg'
import dummy3 from '../assets/dummy3.webp'

// イラストデータ
// 新しい作品を追加する場合は import して配列に追記してください
export const illustrations = [
  {
    id: 1,
    title: "作品 1",
    category: "character",
    src: dummy1,
    thumbnail: dummy1,
    description: "",
    year: 2024,
  },
  {
    id: 2,
    title: "作品 2",
    category: "landscape",
    src: dummy2,
    thumbnail: dummy2,
    description: "",
    year: 2024,
  },
  {
    id: 3,
    title: "作品 3",
    category: "abstract",
    src: dummy3,
    thumbnail: dummy3,
    description: "",
    year: 2024,
  },
]

export const categories = [
  { id: 'all',       label: 'すべて' },
  { id: 'character', label: 'キャラクター' },
  { id: 'landscape', label: '風景' },
  { id: 'abstract',  label: '抽象' },
]
