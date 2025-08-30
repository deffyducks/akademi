'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const stats = [
  { number: '50K+', label: 'Öğrenci' },
  { number: '1000+', label: 'Kurs' },
  { number: '200+', label: 'Eğitmen' },
  { number: '95%', label: 'Memnuniyet' }
]

const values = [
  'Kaliteli eğitim içeriği',
  'Uzman eğitmen kadrosu',
  '7/24 destek hizmeti',
  'Modern teknoloji altyapısı',
  'Kişiselleştirilmiş öğrenme',
  'Sürekli güncellenen içerik'
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
              Hakkımızda
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-display font-bold text-gray-900"
            >
              Eğitimde <span className="text-gradient">Yenilikçi</span> Yaklaşım
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              2020 yılında kurulan Kant Akademi, modern eğitim teknolojilerini 
              kullanarak öğrencilere kaliteli ve erişilebilir eğitim sunmayı hedeflemektedir. 
              Alanında uzman eğitmenlerimiz ve yenilikçi platformumuz ile 
              öğrenme deneyimini en üst seviyeye çıkarıyoruz.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Misyonumuz, herkesin kaliteli eğitime erişebilmesini sağlamak ve 
              öğrencilerin kariyer hedeflerine ulaşmalarına yardımcı olmaktır. 
              Vizyonumuz ise Türkiye'nin önde gelen online eğitim platformu olmak.
            </motion.p>

            {/* Values List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Team Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                Uzman Ekibimiz
              </h3>
              <p className="text-gray-600 mb-6">
                Alanında uzman eğitmenlerimiz, öğrencilerin başarısı için 
                sürekli kendilerini geliştirmekte ve en güncel bilgileri paylaşmaktadır.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  +196 daha fazla uzman
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
