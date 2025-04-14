'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const events = [
  {
    title: '成人崇拜',
    time: '每週日早上',
    schedule: '08:30 & 10:30',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846'
  },
  {
    title: '青年崇拜',
    time: '每週日早上',
    schedule: '08:30 & 10:30',
    image: 'https://images.unsplash.com/photo-1526746323784-6bc814d79273'
  },
  {
    title: '儿童崇拜',
    time: '每週日早上',
    schedule: '08:30 & 10:30',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18'
  }
];

const EventInfo = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-50 to-teal-50/30 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.05),transparent_50%)]"
      />
      <div className="w-full px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-800 mb-4 tracking-tight">聚會資訊</h2>
          <p className="text-xl text-center text-gray-600">Church Event Information</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {events.map((event, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div 
                className="relative h-56 md:h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
              <motion.div 
                className="p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-teal-100 text-teal-800 px-6 py-2 rounded-full text-sm font-medium mb-6"
                >
                  {event.title}
                </motion.span>
                <p className="text-gray-600 mb-3">{event.time}</p>
                <p className="text-3xl font-bold text-gray-900 mb-6">{event.schedule}</p>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="text-teal-600 hover:text-teal-800 flex items-center transition-colors duration-300 text-lg"
                >
                  更多聚會資訊
                  <motion.svg 
                    className="w-6 h-6 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventInfo; 