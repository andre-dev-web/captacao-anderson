"use client"
import Hero from '@/components/confirm'
import React, { useState, useEffect } from 'react';
import Preloader from '@/components/preloader';
import { initFacebookPixel, trackPageView, trackEvent } from '@/lib/fpixel';

export default function Confirm() {
  useEffect(() => {
    initFacebookPixel();
    trackPageView();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {
        isLoading ? <Preloader /> : 
        <Hero/>
      }
    </>
  )
}
