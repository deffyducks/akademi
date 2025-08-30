'use client'

import { motion } from 'framer-motion'
import { StarIcon, QuoteIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    role: 'Frontend Developer',
    company: 'TechCorp',
    rating: 5,
    content: 'Kant Akademi sayesinde React.js konusunda çok şey öğrendim. Eğitmenler çok bilgili ve içerikler güncel. Şimdi iyi bir işim var!',
    avatar: '/api/placeholder/60/60',
    course: 'React.js ile Modern Web Geliştirme'
  },
  {
    id: 2,
    name: 'Mehmet Kaya',
    role: 'Data Scientist',
    company: 'DataLab',
    rating: 5,
    content: 'Python ve veri bilimi kursları gerçekten kaliteli. Pratik projeler ve gerçek dünya örnekleri ile öğrenmek çok kolay.',
    avatar: '/api/placeholder/60/60',
    course: 'Python ile Veri Bilimi'
  },
  {
    id: 3,
    name: 'Zeynep Demir',
    role: 'UI/UX Designer',
    company: 'DesignStudio',
    rating: 4,
    content: 'Tasarım prensiplerini öğrenmek için mükemmel bir platform. Eğitmenler deneyimlerini paylaşıyor ve geri bildirimler çok değerli.',
    avatar: '/api/placeholder/60/60',
    course: 'UI/UX Tasarım Prensipleri'
  },
  {
    id: 4,
    name: 'Can Özkan',
    role: 'Backend Developer',
    company: 'WebTech',
    rating: 5,
    content: 'Node.js kursu ile backend geliştirme konusunda çok şey öğrendim. Kod örnekleri ve projeler gerçekten yardımcı oluyor.',
    avatar: '/api/placeholder/60/60',
    course: 'Node.js Backend Geliştirme'
  },
  {
    id: 5,
    name: 'Elif Arslan',
    role: 'Machine Learning Engineer',
    company: 'AITech',
    rating: 5,
    content: 'Machine Learning kursu çok kapsamlı. Matematiksel temellerden pratik uygulamalara kadar her şey var. Kesinlikle tavsiye ederim.',
    avatar: '/api/placeholder/60/60',
    course: 'Machine Learning Temelleri'
  },
  {
    id: 6,
    name: 'Burak Yıldız',
    role: 'DevOps Engineer',
    company: 'CloudTech',
    rating: 4,
    content: 'DevOps kursu ile CI/CD pipeline konusunda çok şey öğrendim. Gerçek proje örnekleri ile öğrenmek çok etkili.',
    avatar: '/api/placeholder/60/60',
    course: 'DevOps ve CI/CD Pipeline'
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
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
            Öğrencilerimiz <span className="text-gradient">Ne Diyor?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Binlerce öğrencimizin başarı hikayeleri ve deneyimleri. 
            Kant Akademi ile kariyerlerinde büyük adımlar atan öğrencilerimizi dinleyin.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <QuoteIcon className="w-8 h-8 text-primary-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Course */}
              <div className="mb-4">
                <span className="text-sm text-primary-600 font-medium">
                  {testimonial.course}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-display font-bold mb-8">
              Başarı Hikayeleri
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-primary-100">Öğrenci Memnuniyeti</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-primary-100">İş Bulma Oranı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <div className="text-primary-100">Ortalama Puan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-primary-100">Başarılı Öğrenci</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
