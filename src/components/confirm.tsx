"use client"
import Image from 'next/image'
import { useEffect } from 'react';

export default function Confirm() {
  const urlRedirecionamento = "https://chat.whatsapp.com/ClEN9Taks0E2hoEP6Uh6wF";
  useEffect(() => {
    const delay = 5000;

    const timeout = setTimeout(() => {
      window.location.replace(urlRedirecionamento);
    }, delay);
  });
  
  return (
    <section className="text-white body-font">
      <div className='bg-black flex md:flex-row flex-col items-center'>
        <h2 className="mx-auto py-1 text-xl md:text3xl sm:text-4xl font-medium text-white text-center">Aguarde para ser redirecionado ao grupo no WhatsApp</h2>
      </div>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image 
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
            alt="hero" 
            src="/logo.png"
            width={400}
            height={800}
          />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Aulas ao vivo encerradas</h1>
          <p className="mb-8 leading-relaxed">
            Entre no nosso grupo para ter acesso as aulas gravadas, materias de apoio e conteúdos exclusivos.
          </p>
          
          <div className="pt-2">
            <div className='progress-container'>
              <div className='progress-bar'></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
