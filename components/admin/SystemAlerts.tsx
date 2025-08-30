'use client'

import { motion } from 'framer-motion'
import { 
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Sunucu Yükü Yüksek',
    message: 'Ana sunucu CPU kullanımı %85\'in üzerinde',
    time: '5 dakika önce',
    priority: 'high'
  },
  {
    id: 2,
    type: 'info',
    title: 'Yedekleme Tamamlandı',
    message: 'Günlük veritabanı yedeklemesi başarıyla tamamlandı',
    time: '1 saat önce',
    priority: 'low'
  },
  {
    id: 3,
    type: 'error',
    title: 'Ödeme Sistemi Hatası',
    message: 'Stripe API bağlantısında geçici kesinti',
    time: '2 saat önce',
    priority: 'critical'
  },
  {
    id: 4,
    type: 'success',
    title: 'Güvenlik Güncellemesi',
    message: 'SSL sertifikası başarıyla yenilendi',
    time: '3 saat önce',
    priority: 'medium'
  }
]

const getAlertInfo = (type: string) => {
  switch (type) {
    case 'warning':
      return { 
        icon: ExclamationTriangleIcon, 
        color: 'text-yellow-600', 
        bgColor: 'bg-yellow-100',
        borderColor: 'border-yellow-200'
      }
    case 'info':
      return { 
        icon: InformationCircleIcon, 
        color: 'text-blue-600', 
        bgColor: 'bg-blue-100',
        borderColor: 'border-blue-200'
      }
    case 'error':
      return { 
        icon: XCircleIcon, 
        color: 'text-red-600', 
        bgColor: 'bg-red-100',
        borderColor: 'border-red-200'
      }
    case 'success':
      return { 
        icon: CheckCircleIcon, 
        color: 'text-green-600', 
        bgColor: 'bg-green-100',
        borderColor: 'border-green-200'
      }
    default:
      return { 
        icon: InformationCircleIcon, 
        color: 'text-gray-600', 
        bgColor: 'bg-gray-100',
        borderColor: 'border-gray-200'
      }
  }
}

const getPriorityInfo = (priority: string) => {
  switch (priority) {
    case 'critical':
      return { color: 'text-red-600', bgColor: 'bg-red-100', text: 'Kritik' }
    case 'high':
      return { color: 'text-orange-600', bgColor: 'bg-orange-100', text: 'Yüksek' }
    case 'medium':
      return { color: 'text-yellow-600', bgColor: 'bg-yellow-100', text: 'Orta' }
    case 'low':
      return { color: 'text-green-600', bgColor: 'bg-green-100', text: 'Düşük' }
    default:
      return { color: 'text-gray-600', bgColor: 'bg-gray-100', text: 'Bilinmiyor' }
  }
}

export default function SystemAlerts() {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-display font-semibold text-gray-900">
          Sistem Uyarıları
        </h3>
        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
          Tümünü Görüntüle
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => {
          const alertInfo = getAlertInfo(alert.type)
          const priorityInfo = getPriorityInfo(alert.priority)
          
          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`border rounded-xl p-4 ${alertInfo.borderColor} hover:shadow-md transition-all duration-200`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${alertInfo.bgColor}`}>
                  <alertInfo.icon className={`w-4 h-4 ${alertInfo.color}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {alert.title}
                    </h4>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${priorityInfo.bgColor} ${priorityInfo.color}`}>
                      {priorityInfo.text}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 mb-2">
                    {alert.message}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center">
                      <ClockIcon className="w-3 h-3 mr-1" />
                      {alert.time}
                    </span>
                    
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 text-xs">
                        Detay
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 text-xs">
                        Çözüldü
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* System Status */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Sistem Durumu</span>
            <span className="text-sm font-medium text-green-600">Aktif</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Uptime</span>
            <span className="text-sm font-medium text-gray-900">99.9%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Son Kontrol</span>
            <span className="text-sm font-medium text-gray-900">2 dk önce</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-green-50 hover:bg-green-100 text-green-700 font-medium py-2 px-3 rounded-lg transition-colors border border-green-200 text-sm">
            Tümünü Çöz
          </button>
          <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-3 rounded-lg transition-colors border border-blue-200 text-sm">
            Rapor Oluştur
          </button>
        </div>
      </div>
    </div>
  )
}
