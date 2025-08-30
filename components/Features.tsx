'use client'

import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  ClockIcon, 
  DevicePhoneMobileIcon, 
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: AcademicCapIcon,
    title: 'Uzman Eğitmenler',
    description: 'Alanında uzman eğitmenlerden öğrenin ve pratik deneyimlerini paylaşın.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: ClockIcon,
    title: '7/24 Erişim',
    description: 'İstediğiniz zaman, istediğiniz yerden kurslarınıza erişin ve öğrenmeye devam edin.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobil Uyumlu',
    description: 'Tüm cihazlarda mükemmel çalışan responsive tasarım ile her yerde öğrenin.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: UserGroupIcon,
    title: 'Topluluk Desteği',
    description: 'Diğer öğrencilerle etkileşime geçin, sorularınızı sorun ve deneyimlerinizi paylaşın.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: ChartBarIcon,
    title: 'İlerleme Takibi',
    description: 'Detaylı raporlar ve analizler ile öğrenme sürecinizi takip edin.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Güvenli Platform',
    description: 'En son güvenlik standartları ile korunan platformda güvenle öğrenin.',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export default function Features() {
  return (
    <section className="section-padding bg-white">
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
            Neden <span className="text-gradient">Kant Akademi</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern eğitim teknolojileri ile desteklenen platformumuz, 
            öğrenme deneyiminizi en üst seviyeye çıkarır.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Hemen Başlayın
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Ücretsiz hesap oluşturun ve ilk kursunuzu deneyimleyin. 
              Kant Akademi ile öğrenme yolculuğunuza bugün başlayın.
            </p>
            <button className="btn-primary">
              Ücretsiz Deneyin
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
