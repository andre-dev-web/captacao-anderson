"use client"
import Form from '@/components/form'
import React, { useState, useEffect } from 'react';
import Preloader from '@/components/preloader';

export default function Home() {
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
        <Form/>
      }
    </>
  )
}
