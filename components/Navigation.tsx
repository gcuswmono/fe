'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  )
}

export default function Navigation() {
    const path = usePathname();
  const [windowWidth, setWindowWidth] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getFontSize = (baseSize: number) => {
    const ratio = windowWidth / 1920
    return Math.max(baseSize * ratio, baseSize * 0.8)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      {/* Hamburger Icon */}
      <button
                className="fixed top-4 left-4 z-50 p-2 text-gray-500 hover:text-gray-600 focus:outline-none dark:text-gray-400 dark:hover:text-gray-300 transition-all duration-200"
                onClick={toggleSidebar}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>

      {/* Sidebar Backdrop */}
      {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md overflow-y-auto transition duration-200 ease-in-out z-40`}>
                <div className="p-6">
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="flex items-center py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" style={{ fontSize: `${getFontSize(1)}rem` }}>
                                    <span className="flex-grow">Home</span>
                                    {path === "/" && <span className="ml-2">🔥</span>}
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="flex items-center py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" style={{ fontSize: `${getFontSize(1)}rem` }}>
                                    <span className="flex-grow">Login</span>
                                    {path === "/login" && <span className="ml-2">🔥</span>}
                                </Link>
                            </li>
                            <li>
                                <Link href="/signup" className="flex items-center py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" style={{ fontSize: `${getFontSize(1)}rem` }}>
                                    <span className="flex-grow">Sign Up</span>
                                    {path === "/signup" && <span className="ml-2">🔥</span>}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}