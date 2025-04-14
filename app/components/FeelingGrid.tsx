'use client';

import React from 'react';
import { motion } from 'framer-motion';

const gridItems = [
  {
    icon: 'fa-solid fa-book-bible',
    title: '主日週報'
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: '學牧週報'
  },
  {
    icon: 'fa-solid fa-child',
    title: '兒牧週報'
  },
  {
    icon: 'fa-solid fa-church',
    title: '線上崇拜連線'
  },
  {
    icon: 'fa-solid fa-hands-praying',
    title: '代禱卡'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: '主信月APP'
  },
  {
    icon: 'fa-solid fa-hand-holding-heart',
    title: '祈禱祝福'
  },
  {
    icon: 'fa-brands fa-line',
    title: 'LINE奉獻'
  }
];

const FeelingGrid = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,128,128,0.1),transparent_50%)]"></div>
      <div className="w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold text-center text-white mb-4 tracking-tight"
        >
          What Do You Feel Like Today?
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 px-8">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
              className={`flex flex-col items-center justify-center p-8 backdrop-blur-sm border border-teal-600/30 rounded-2xl transition-all duration-300 cursor-pointer group ${
                index === 7 ? 'hidden md:flex' : ''
              }`}
            >
              <motion.div 
                className="w-16 h-16 mb-6 flex items-center justify-center relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <i className={`${item.icon} text-4xl text-white group-hover:text-teal-300 transition-colors duration-300`}></i>
              </motion.div>
              <h3 className="text-xl font-medium text-white text-center group-hover:text-teal-300 transition-colors duration-300">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeelingGrid; 