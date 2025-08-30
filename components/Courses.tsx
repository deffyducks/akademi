'use client'

import { motion } from 'framer-motion'
import { StarIcon, ClockIcon, UserIcon, PlayIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'

const courses = [
  {
    id: 1,
    title: 'React.js ile Modern Web Geliştirme',
    instructor: 'Ahmet Yılmaz',
    rating: 4.8,
    students: 1247,
    duration: '12 saat',
    price: '₺299',
    originalPrice: '₺399',
    image: '/api/placeholder/300/200',
    category: 'Web Geliştirme',
    level: 'Orta',
    featured: true
  },
  {
    id: 2,
    title: 'Python ile Veri Bilimi',
    instructor: 'Zeynep Kaya',
    rating: 4.9,
    students: 2156,
    duration: '18 saat',
    price: '₺399',
    originalPrice: '₺499',
    image: '/api/placeholder/300/200',
    category: 'Veri Bilimi',
    level: 'Başlangıç',
    featured: false
  },
  {
    id: 3,
    title: 'UI/UX Tasarım Prensipleri',
    instructor: 'Mehmet Demir',
    rating: 4.7,
    students: 892,
    duration: '15 saat',
    price: '₺349',
    originalPrice: '₺449',
    image: '/api/placeholder/300/200',
    category: 'Tasarım',
    level: 'Başlangıç',
    featured: false
  },
  {
    id: 4,
    title: 'Node.js Backend Geliştirme',
    instructor: 'Elif Özkan',
    rating: 4.6,
    students: 1567,
    duration: '20 saat',
    price: '₺449',
    originalPrice: '₺549',
    image: '/api/placeholder/300/200',
    category: 'Web Geliştirme',
    level: 'İleri',
    featured: false
  },
  {
    id: 5,
    title: 'Machine Learning Temelleri',
    instructor: 'Can Arslan',
    rating: 4.9,
    students: 3421,
    duration: '25 saat',
    price: '₺599',
    originalPrice: '₺699',
    image: '/api/placeholder/300/200',
    category: 'Yapay Zeka',
    level: 'Orta',
    featured: true
  },
  {
    id: 6,
    title: 'DevOps ve CI/CD Pipeline',
    instructor: 'Selin Yıldız',
    rating: 4.5,
    students: 678,
    duration: '16 saat',
    price: '₺379',
    originalPrice: '₺479',
    image: '/api/placeholder/300/200',
    category: 'DevOps',
    level: 'İleri',
    featured: false
  }
]

const categories = [
  'Tümü',
  'Web Geliştirme',
  'Veri Bilimi',
  'Tasarım',
  'Yapay Zeka',
  'DevOps',
  'Mobil Geliştirme'
]

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Popüler <span className="text-gradient">Kurslar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alanında uzman eğitmenlerden öğrenin ve kariyerinizi bir üst seviyeye taşıyın.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                index === 0
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer overflow-hidden"
            >
              {/* Course Image */}
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center">
                  <PlayIcon className="w-16 h-16 text-white opacity-80" />
                </div>
                {course.featured && (
                  <div className="absolute top-3 left-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Öne Çıkan
                  </div>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <HeartIcon className="w-5 h-5 text-gray-600" />
                </button>
                <div className="absolute bottom-3 left-3 bg-white/90 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                  {course.level}
                </div>
              </div>

              {/* Course Content */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-primary-600 font-medium">
                    {course.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {course.instructor}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <UserIcon className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">
                      {course.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <button className="btn-primary text-sm py-2 px-4">
                    Kursa Git
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="btn-secondary text-lg px-8 py-4">
            Tüm Kursları Görüntüle
          </button>
        </motion.div>
      </div>
    </section>
  )
}
