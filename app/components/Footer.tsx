'use client';

import React from 'react';
import Link from 'next/link';

const navItems = [
  { title: '認識我們', href: '#' },
  { title: '聚會資訊', href: '#' },
  { title: '線上教會', href: '#' },
  { title: '福音專區', href: '#' },
  { title: '幸福門訊', href: '#' },
  { title: '線上奉獻', href: '#' },
  { title: '教會消息', href: '#' }
];

const socialLinks = [
  { icon: '📺', href: '#', label: 'YouTube' },
  { icon: '📱', href: '#', label: 'Facebook' },
  { icon: '📷', href: '#', label: 'Instagram' },
  { icon: '📝', href: '#', label: 'Tumblr' }
];

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-center gap-8 mb-12">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white hover:text-teal-200 transition duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center mb-8">
          <div className="text-3xl font-bold text-white">基督教高雄靈糧堂</div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="w-10 h-10 rounded-full bg-coral-500 flex items-center justify-center hover:bg-coral-600 transition duration-300"
              aria-label={link.label}
            >
              <span className="text-xl">{link.icon}</span>
            </Link>
          ))}
        </div>

        <div className="text-center text-sm text-teal-200">
          <p>Copyright 2025 Bread of Life Christian in Kaohsiung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 