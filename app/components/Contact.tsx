'use client';

import React from 'react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: 'fa-solid fa-phone',
    title: '聯絡電話',
    value: '07-3456868'
  },
  {
    icon: 'fa-solid fa-phone-volume',
    title: '免付費電話',
    value: '0800-000-830'
  },
  {
    icon: 'fa-solid fa-fax',
    title: '傳真',
    value: '07-3456527'
  },
  {
    icon: 'fa-solid fa-location-dot',
    title: '地址',
    value: '高雄市左營區文川路157號'
  }
];

const Contact = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,128,128,0.1),transparent_50%)]"
      />
      <div className="w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-white mb-4 tracking-tight">Contact Us</h2>
          <p className="text-xl text-center text-teal-200 mb-24">聯繫我們</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center py-8"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 bg-teal-700/50 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 shadow-lg"
              >
                <i className={`${info.icon} text-4xl text-white`}></i>
              </motion.div>
              <h3 className="text-2xl font-medium mb-4">{info.title}</h3>
              <p className="text-teal-200 text-lg">{info.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h3 className="text-5xl font-bold mb-4 tracking-tight">Find Us</h3>
          <p className="text-xl text-teal-200 mb-16">找到我們</p>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-6xl mx-auto bg-teal-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <div className="aspect-video bg-teal-700/50 rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/2zR4GGjy2cI"
                title="Church Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 