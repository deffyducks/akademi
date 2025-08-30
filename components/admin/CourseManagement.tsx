'use client'

import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ExclamationTriangleIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

const courses = [
  {
    id: 1,
    title: 'React.js ile Modern Web Geliştirme',
    instructor: 'Ahmet Yılmaz',
    status: 'active',
    students: 1247,
    rating: 4.8,
    lastUpdated: '2 saat önce',
    category: 'Web Geliştirme'
  },
  {
    id: 2,
    title: 'Python ile Veri Bilimi',
    instructor: 'Zeynep Kaya',
    status: 'pending',
    students: 2156,
    rating: 4.9,
    lastUpdated: '1 gün önce',
    category: 'Veri Bilimi'
  },
  {
    id: 3,
    title: 'UI/UX Tasarım Prensipleri',
    instructor: 'Mehmet Demir',
    status: 'review',
    students: 892,
    rating: 4.7,
    lastUpdated: '3 gün önce',
    category: 'Tasarım'
  },
  {
    id: 4,
    title: 'Node.js Backend Geliştirme',
    instructor: 'Elif Özkan',
    status: 'active',
    students: 1567,
    rating: 4.6,
    lastUpdated: '5 gün önce',
    category: 'Web Geliştirme'
  }
]

const getStatusInfo = (status: string) => {
  switch (status) {
    case 'active':
      return { color: 'text-green-600', bgColor: 'bg-green-100', text: 'Aktif' }
    case 'pending':
      return { color: 'text-yellow-600', bgColor: 'bg-yellow-100', text: 'Beklemede' }
    case 'review':
      return { color: 'text-blue-600', bgColor: 'bg-blue-100', text: 'İncelemede' }
    default:
      return { color: 'text-gray-600', bgColor: 'bg-gray-100', text: 'Bilinmiyor' }
  }
}

export default function CourseManagement() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-display font-semibold text-gray-900">
          Kurs Yönetimi
        </h3>
        <div className="flex space-x-3">
          <button className="btn-secondary text-sm py-2 px-4">
            Filtrele
          </button>
          <button className="btn-primary text-sm py-2 px-4">
            + Yeni Kurs
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">1,247</div>
          <div className="text-sm text-gray-600">Aktif Kurs</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600">45</div>
          <div className="text-sm text-gray-600">Beklemede</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">23</div>
          <div className="text-sm text-gray-600">İncelemede</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">12</div>
          <div className="text-sm text-gray-600">Reddedildi</div>
        </div>
      </div>

      {/* Courses Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kurs
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Eğitmen
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Durum
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Öğrenci
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Puan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Son Güncelleme
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course, index) => {
              const statusInfo = getStatusInfo(course.status)
              return (
                <motion.tr
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">
                          {course.title.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {course.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {course.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.instructor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusInfo.bgColor} ${statusInfo.color}`}>
                      {statusInfo.text}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {course.students.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      {course.rating}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <CheckCircleIcon className="w-4 h-4" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Toplam <span className="font-medium">1,247</span> kurs
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Önceki
          </button>
          <button className="px-3 py-2 text-sm font-medium text-white bg-primary-600 border border-primary-600 rounded-md">
            1
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Sonraki
          </button>
        </div>
      </div>
    </div>
  )
}
