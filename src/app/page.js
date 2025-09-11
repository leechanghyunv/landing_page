'use client'
import React, { useState, useEffect } from "react";

import { HeroSection } from './components/HeroSection';
import { Feature1Section } from './components/Feature1Section';
import { Feature2Section } from './components/Feature2Section';
import { Feature3Section } from './components/Feature3Section';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';


export default function Home() {
  return (
    <>
    <main>
   <HeroSection />
   {/* <AppPreviewSection /> */}
      <Feature1Section />
      <Feature2Section />
      <Feature3Section />
      <TestimonialsSection />
      <FAQSection />
      </main>
    </>
  );
}





