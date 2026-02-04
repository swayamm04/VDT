"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Mission } from '@/components/sections/Mission';
import { About } from '@/components/sections/About';
import { Admin } from '@/components/sections/Admin';
import { Services } from '@/components/sections/Services';
import { Technologies } from '@/components/sections/Technologies';
import { Industries } from '@/components/sections/Industries';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Mission />
        <About />
        <Admin />
        <Services />
        <Technologies />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
