import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeelingGrid from './components/FeelingGrid';
import EventInfo from './components/EventInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeelingGrid />
      <EventInfo />
      <Contact />
      <Footer />
    </main>
  );
} 