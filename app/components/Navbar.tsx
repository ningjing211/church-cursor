'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { title: '認識我們', href: '#', hasDropdown: true },
  { title: '聚會資訊', href: '#', hasDropdown: true },
  { title: '線上教會', href: '#', hasDropdown: true },
  { title: '福音專區', href: '#', hasDropdown: true },
  { title: '幸福門訊', href: '#', hasDropdown: true },
  { title: '線上奉獻', href: '#', hasDropdown: true },
  { title: '教會消息', href: '#', hasDropdown: true }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="w-full px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-3xl lg:text-4xl font-bold text-teal-800">基督教高雄靈糧堂</div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link 
                  href={item.href}
                  className="text-xl text-gray-700 hover:text-teal-600 flex items-center font-medium"
                >
                  {item.title}
                  {item.hasDropdown && (
                    <svg className="w-5 h-5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Language Switch */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/en" 
              className="text-xl text-gray-700 hover:text-teal-600 font-medium"
            >
              EN
            </Link>
            <button className="lg:hidden">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 