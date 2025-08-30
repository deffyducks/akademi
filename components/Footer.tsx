'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedInIcon, 
  YoutubeIcon 
} from 'lucide-react'

const footerLinks = {
  platform: [
    { name: 'Kurslar', href: '#courses' },
    { name: 'Eğitmenler', href: '#instructors' },
    { name: 'Sertifikalar', href: '#certificates' },
    { name: 'Canlı Dersler', href: '#live-classes' }
  ],
  company: [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Kariyer', href: '#careers' },
    { name: 'Basın', href: '#press' },
    { name: 'Blog', href: '#blog' }
  ],
  support: [
    { name: 'Yardım Merkezi', href: '#help' },
    { name: 'İletişim', href: '#contact' },
    { name: 'SSS', href: '#faq' },
    { name: 'Topluluk', href: '#community' }
  ],
  legal: [
    { name: 'Gizlilik Politikası', href: '#privacy' },
    { name: 'Kullanım Şartları', href: '#terms' },
    { name: 'Çerez Politikası', href: '#cookies' },
    { name: 'KVKK', href: '#kvkk' }
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
  { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com' },
  { name: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="text-2xl font-display font-bold">
                  Kant Akademi
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Modern eğitim teknolojileri ile desteklenen platformumuz, 
                öğrencilere kaliteli ve erişilebilir eğitim sunmayı hedeflemektedir. 
                Geleceğinizi şekillendirmek için buradayız.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Platform Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Platform</h3>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Şirket</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Destek</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Güncel Kalın
            </h3>
            <p className="text-gray-300 mb-6">
              Yeni kurslar ve eğitim içerikleri hakkında bilgi almak için 
              e-posta listemize katılın.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors duration-200">
                Katıl
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Kant Akademi. Tüm hakları saklıdır.
            </div>
            
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
