'use client'

import { motion } from 'framer-motion'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

interface AdminStat {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export default function AdminStats({ stats }: { stats: AdminStat[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-soft-lg transition-all duration-300 border-l-4 border-red-500"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="mt-4 flex items-center">
            {stat.changeType === 'positive' ? (
              <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              geçen aydan
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
