import React, { useState } from "react";
import Link from 'next/link';
// import { getKeyLocalStorage, getLocalStorage, setKeyLocalStorage } from "@utils/localStorage";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [darkMode, setDarkMode] = useState('');

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (window) {
  //       if (getKeyLocalStorage('theme') === 'dark' || (!('theme' in getLocalStorage()) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //         setDarkMode('dark');
  //         document.documentElement.classList.add('dark')
  //       } else {
  //         setDarkMode('light');
  //         document.documentElement.classList.remove('dark')
  //       }
  //     }
  //   }, 100)

  // }, []);

  const toggleMenuMobile: VoidFunction = () => {
    setShowMenu((e) => !e);
  };

  // const toggleDarkMode: VoidFunction = () => {
  //   if (getKeyLocalStorage('theme') === 'dark' || (!('theme' in getLocalStorage()) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     setKeyLocalStorage('theme', 'light');
  //     setDarkMode('light');
  //     document.documentElement.classList.remove('dark')
  //   } else {
  //     setKeyLocalStorage('theme', 'dark');
  //     setDarkMode('dark');
  //     document.documentElement.classList.add('dark')
  //   }
  // };

  return (
    <nav className="bg-black border-b-2 border-primary">
      <div className="max-w-7xl mx-auto px-2 py-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" onClick={() => toggleMenuMobile()}>
              <span className="sr-only">Open main menu</span>
              <svg className={`${!showMenu ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${!showMenu ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link as="/" href="/" passHref>
                <a>
                  <img className="block lg:hidden h-8 w-auto rounded-full" src="/rodrigogodoy.png" alt="Rodrigo Godoy" />
                  <div className="hidden lg:flex items-center">
                    <img className="h-12 w-auto rounded-full mr-3" src="/rodrigogodoy.png" alt="Rodrigo Godoy" />
                    <span className="text-white text-xl">Rodrigo Godoy</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a> */}
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Sobre</a>
              </div>
            </div>
          </div>
          {/* <div>
            <button onClick={() => toggleDarkMode()}>
              {darkMode ? (
                <svg className={`w-8 h-8 md:w-10 md:h-10 ${darkMode ? 'text.white' : 'text-black'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className={`w-8 h-8 md:w-10 md:h-10 ${darkMode !== 'dark' ? 'text.black' : 'text-white'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div> */}
        </div>
      </div>
      <div className={`${showMenu ? 'block' : 'hidden' } sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
