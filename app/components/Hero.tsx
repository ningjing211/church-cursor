'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* 背景图片 */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3")',
          filter: 'brightness(0.65)'
        }}
      />
      
      {/* 玻璃效果遮罩 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-b from-black/30 to-teal-900/50 backdrop-blur-[2px]"
      />
      
      {/* 内容 */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="w-full px-8 sm:px-12 lg:px-16">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 sm:mb-12 tracking-tight leading-tight"
          >
            祈禱祝福
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 sm:mb-16 max-w-4xl mx-auto font-light leading-relaxed tracking-wide"
          >
            在這裡，我們一起尋求生命的意義，分享信仰的喜樂
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF7E5F] text-white px-16 py-6 rounded-full text-xl font-semibold hover:bg-[#FF6B4A] transition-colors duration-300 shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">了解更多</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FF7E5F] to-[#FF6B4A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* 向下滾動提示 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white"
      >
        <i className="fa-solid fa-chevron-down text-3xl animate-bounce"></i>
      </motion.div>
    </div>
  );
};

export default Hero; 