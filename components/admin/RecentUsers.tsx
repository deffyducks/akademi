'use client'

import { motion } from 'framer-motion'
import { 
  UserPlusIcon, 
  CheckCircleIcon, 
  ClockIcon,
  EyeIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const recentUsers = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    email: 'ayse@email.com',
    role: 'student',
    status: 'active',
    joined: '2 saat önce',
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 2,
    name: 'Mehmet Kaya',
    email: 'mehmet@email.com',
    role: 'instructor',
    status: 'pending',
    joined: '4 saat önce',
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 3,
    name: 'Zeynep Demir',
    email: 'zeynep@email.com',
    role: 'student',
    status: 'active',
    joined: '1 gün önce',
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 4,
    name: 'Can Özkan',
    email: 'can@email.com',
    role: 'student',
    status: 'suspended',
    joined: '2 gün önce',
    avatar: '/api/placeholder/40/40'
  }
]

const getRoleInfo = (role: string) => {
  switch (role) {
    case 'student':
      return { color: 'text-blue-600', bgColor: 'bg-blue-100', text: 'Öğrenci' }
    case 'instructor':
      return { color: 'text-green-600', bgColor: 'bg-green-100', text: 'Eğitmen' }
    case 'admin':
      return { color: 'text-red-600', bgColor: 'bg-red-100', text: 'Admin' }
    default:
      return { color: 'text-gray-600', bgColor: 'bg-gray-100', text: 'Bilinmiyor' }
  }
}

const getStatusInfo = (status: string) => {
  switch (status) {
    case 'active':
      return { color: 'text-green-600', bgColor: 'bg-green-100', text: 'Aktif' }
    case 'pending':
      return { color: 'text-yellow-600', bgColor: 'bg-yellow-100', text: 'Beklemede' }
    case 'suspended':
      return { color: 'text-red-600', bgColor: 'bg-red-100', text: 'Askıya Alındı' }
    default:
      return { color: 'text-gray-600', bgColor: 'bg-gray-100', text: 'Bilinmiyor' }
  }
}

export default function RecentUsers() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-display font-semibold text-gray-900">
          Son Kullanıcılar
        </h3>
        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
          Tümünü Görüntüle
        </button>
      </div>

      <div className="space-y-4">
        {recentUsers.map((user, index) => {
          const roleInfo = getRoleInfo(user.role)
          const statusInfo = getStatusInfo(user.status)
          
          return (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserIcon className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {user.name}
                    </h4>
                    <div className="flex space-x-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${roleInfo.bgColor} ${roleInfo.color}`}>
                        {roleInfo.text}
                      </span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusInfo.bgColor} ${statusInfo.color}`}>
                        {statusInfo.text}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 mb-2">
                    {user.email}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {user.joined}
                    </span>
                    
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      {user.status === 'pending' && (
                        <button className="text-green-600 hover:text-green-900">
                          <CheckCircleIcon className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-blue-600">+45</div>
            <div className="text-xs text-gray-600">Bu Hafta</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-600">+234</div>
            <div className="text-xs text-gray-600">Bu Ay</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary-600">15.4K</div>
            <div className="text-xs text-gray-600">Toplam</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full bg-primary-50 hover:bg-primary-100 text-primary-700 font-medium py-3 px-4 rounded-xl transition-colors border border-primary-200">
          + Yeni Kullanıcı Ekle
        </button>
      </div>
    </div>
  )
}
