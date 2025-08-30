'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  UsersIcon, 
  BookOpenIcon, 
  ChartBarIcon, 
  CogIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  BellIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'
import AdminStats from '@/components/admin/AdminStats'
import RecentUsers from '@/components/admin/RecentUsers'
import CourseManagement from '@/components/admin/CourseManagement'
import SystemAlerts from '@/components/admin/SystemAlerts'

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const adminStats = [
    {
      title: 'Toplam Kullanıcı',
      value: '15,432',
      change: '+234',
      changeType: 'positive',
      icon: UsersIcon,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Aktif Kurs',
      value: '1,247',
      change: '+45',
      changeType: 'positive',
      icon: BookOpenIcon,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Aylık Gelir',
      value: '₺125,430',
      change: '+12.5%',
      changeType: 'positive',
      icon: CurrencyDollarIcon,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Sistem Durumu',
      value: 'Aktif',
      change: '99.9%',
      changeType: 'positive',
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className="lg:pl-72">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="py-8">
          <div className="container-custom">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">
                Platform yönetimi ve istatistikler. Sistem durumunu takip edin ve gerekli işlemleri gerçekleştirin.
              </p>
            </motion.div>

            {/* Admin Stats */}
            <AdminStats stats={adminStats} />

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              {/* Course Management */}
              <div className="lg:col-span-2">
                <CourseManagement />
              </div>

              {/* Sidebar Content */}
              <div className="space-y-8">
                <RecentUsers />
                <SystemAlerts />
              </div>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <div className="bg-white rounded-2xl shadow-soft p-8">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">
                  Hızlı Yönetim İşlemleri
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <button className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-200 group">
                    <UsersIcon className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-blue-700">Kullanıcı Yönetimi</span>
                  </button>
                  
                  <button className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-200 group">
                    <BookOpenIcon className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-green-700">Kurs Yönetimi</span>
                  </button>
                  
                  <button className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-200 group">
                    <ChartBarIcon className="w-8 h-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-purple-700">Raporlar</span>
                  </button>
                  
                  <button className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-200 group">
                    <CogIcon className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-orange-700">Sistem Ayarları</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <div className="bg-white rounded-2xl shadow-soft p-8">
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">
                  Son Sistem Aktiviteleri
                </h3>
                <div className="space-y-4">
                  {[
                    { action: 'Yeni kurs eklendi', user: 'Admin', time: '2 dakika önce', type: 'success' },
                    { action: 'Kullanıcı hesabı onaylandı', user: 'Moderator', time: '15 dakika önce', type: 'info' },
                    { action: 'Sistem yedeklemesi tamamlandı', user: 'System', time: '1 saat önce', type: 'success' },
                    { action: 'Yeni ödeme alındı', user: 'Payment Gateway', time: '2 saat önce', type: 'success' },
                    { action: 'Sunucu bakımı planlandı', user: 'Admin', time: '3 saat önce', type: 'warning' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.type === 'success' ? 'bg-green-500' :
                          activity.type === 'warning' ? 'bg-yellow-500' :
                          'bg-blue-500'
                        }`} />
                        <span className="text-gray-700">{activity.action}</span>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>{activity.user}</div>
                        <div>{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
