'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { 
  HomeIcon,
  UsersIcon,
  BookOpenIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  BellIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Kullanıcı Yönetimi', href: '/admin/users', icon: UsersIcon },
  { name: 'Kurs Yönetimi', href: '/admin/courses', icon: BookOpenIcon },
  { name: 'Eğitmen Yönetimi', href: '/admin/instructors', icon: AcademicCapIcon },
  { name: 'İçerik Yönetimi', href: '/admin/content', icon: DocumentTextIcon },
  { name: 'Canlı Dersler', href: '/admin/live-classes', icon: VideoCameraIcon },
  { name: 'Mesajlar', href: '/admin/messages', icon: ChatBubbleLeftRightIcon },
  { name: 'Değerlendirmeler', href: '/admin/reviews', icon: StarIcon },
  { name: 'Ödeme Yönetimi', href: '/admin/payments', icon: CurrencyDollarIcon },
  { name: 'Raporlar', href: '/admin/reports', icon: ChartBarIcon },
  { name: 'Güvenlik', href: '/admin/security', icon: ShieldCheckIcon },
  { name: 'Sistem Ayarları', href: '/admin/settings', icon: CogIcon },
]

const secondaryNavigation = [
  { name: 'Bildirimler', href: '/admin/notifications', icon: BellIcon },
  { name: 'Sistem Durumu', href: '/admin/system-status', icon: ExclamationTriangleIcon },
  { name: 'Çıkış Yap', href: '/logout', icon: XMarkIcon },
]

export default function AdminSidebar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile sidebar */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <span className="text-xl font-display font-bold text-white">
                        Admin Panel
                      </span>
                    </div>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={`
                                  group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                                  ${pathname === item.href
                                    ? 'bg-red-800 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                  }
                                `}
                                onClick={() => setOpen(false)}
                              >
                                <item.icon
                                  className={`h-6 w-6 shrink-0 ${
                                    pathname === item.href ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                  }`}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <ul role="list" className="-mx-2 space-y-1">
                          {secondaryNavigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => setOpen(false)}
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-white"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-display font-bold text-white">
                Admin Panel
              </span>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`
                          group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                          ${pathname === item.href
                            ? 'bg-red-800 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                          }
                        `}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 ${
                            pathname === item.href ? 'text-white' : 'text-gray-400 group-hover:text-white'
                          }`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <ul role="list" className="-mx-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-300 hover:text-white hover:bg-gray-800"
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-white"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
