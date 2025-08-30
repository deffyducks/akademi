'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: 'E-posta',
    value: 'info@kantakademi.com',
    description: '7/24 e-posta desteği'
  },
  {
    icon: PhoneIcon,
    title: 'Telefon',
    value: '+90 (212) 555 0123',
    description: 'Pazartesi - Cuma 09:00-18:00'
  },
  {
    icon: MapPinIcon,
    title: 'Adres',
    value: 'İstanbul, Türkiye',
    description: 'Merkez ofis'
  },
  {
    icon: ClockIcon,
    title: 'Çalışma Saatleri',
    value: '09:00 - 18:00',
    description: 'Pazartesi - Cuma'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-white">
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
            Bizimle <span className="text-gradient">İletişime Geçin</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız. 
            Aşağıdaki formu doldurun veya doğrudan iletişim bilgilerimizi kullanın.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
              Mesaj Gönderin
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Konu *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Konu seçiniz</option>
                  <option value="genel">Genel Bilgi</option>
                  <option value="kurs">Kurs Hakkında</option>
                  <option value="teknik">Teknik Destek</option>
                  <option value="oneri">Öneri ve Şikayet</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full group"
              >
                Mesaj Gönder
                <PaperAirplaneIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-6">
              İletişim Bilgileri
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6"
            >
              <h4 className="font-semibold text-gray-900 mb-3">
                Hızlı Yanıt Garantisi
              </h4>
              <p className="text-gray-600 text-sm">
                Mesajlarınıza 24 saat içinde yanıt veriyoruz. 
                Acil durumlar için telefon ile iletişime geçebilirsiniz.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
