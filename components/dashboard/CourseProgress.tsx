'use client'

import { motion } from 'framer-motion'
import { PlayIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid'

const courses = [
  {
    id: 1,
    title: 'React.js ile Modern Web Geliştirme',
    instructor: 'Ahmet Yılmaz',
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    lastAccessed: '2 saat önce',
    image: '/api/placeholder/80/60',
    category: 'Web Geliştirme'
  },
  {
    id: 2,
    title: 'Python ile Veri Bilimi',
    instructor: 'Zeynep Kaya',
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    lastAccessed: '1 gün önce',
    image: '/api/placeholder/80/60',
    category: 'Veri Bilimi'
  },
  {
    id: 3,
    title: 'UI/UX Tasarım Prensipleri',
    instructor: 'Mehmet Demir',
    progress: 90,
    totalLessons: 18,
    completedLessons: 16,
    lastAccessed: '3 saat önce',
    image: '/api/placeholder/80/60',
    category: 'Tasarım'
  }
]

export default function CourseProgress() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-display font-semibold text-gray-900">
          Kurs İlerlemem
        </h3>
        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
          Tümünü Görüntüle
        </button>
      </div>

      <div className="space-y-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start space-x-4">
              {/* Course Image */}
              <div className="w-20 h-16 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <PlayIcon className="w-8 h-8 text-white" />
              </div>

              {/* Course Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-primary-600 mb-1">
                      {course.category}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                      {course.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {course.instructor}
                    </p>
                  </div>
                  
                  <div className="text-right text-sm text-gray-500">
                    <p>Son erişim</p>
                    <p className="font-medium">{course.lastAccessed}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>İlerleme</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                {/* Lesson Count */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1" />
                      {course.completedLessons} tamamlandı
                    </span>
                    <span className="flex items-center">
                      <ClockIcon className="w-4 h-4 text-gray-400 mr-1" />
                      {course.totalLessons} toplam
                    </span>
                  </div>
                  
                  <button className="btn-primary text-sm py-2 px-4">
                    Devam Et
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900 mb-1">
              Önerilen Kurslar
            </h4>
            <p className="text-sm text-gray-600">
              İlgi alanlarınıza göre seçilmiş kurslar
            </p>
          </div>
          <button className="btn-secondary text-sm py-2 px-4">
            Keşfet
          </button>
        </div>
      </div>
    </div>
  )
}
