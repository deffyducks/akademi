'use client'

import { motion } from 'framer-motion'
import { PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section id="home" className="section-padding pt-32 bg-gradient-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              Geleceğin Eğitimi Burada
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
            >
              <span className="text-gray-900">Kant Akademi ile</span>{' '}
              <span className="text-gradient">Geleceğinizi</span>{' '}
              <span className="text-gray-900">Şekillendirin</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Modern eğitim teknolojileri ile desteklenen interaktif kurslar, 
              uzman eğitmenler ve kişiselleştirilmiş öğrenme deneyimi. 
              Kariyerinizi bir üst seviyeye taşıyın.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary group">
                Hemen Başla
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                <PlayIcon className="w-5 h-5 mr-2" />
                Tanıtım Videosu
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center space-x-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-gray-600">Öğrenci</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Kurs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-gray-600">Memnuniyet</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative z-10">
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl shadow-soft-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <PlayIcon className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Eğitim Platformu</h3>
                    <p className="text-lg opacity-90">Modern ve interaktif öğrenme</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 rounded-full opacity-80"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -right-8 w-32 h-32 border-2 border-primary-200 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
