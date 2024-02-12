"use client"
import Image from 'next/image'
import { useEffect } from 'react';

export default function Confirm() {
  const urlRedirecionamento = "https://links.anderviana.com.br/";
  useEffect(() => {
    const delay = 5000;

    const timeout = setTimeout(() => {
      window.location.replace(urlRedirecionamento);
    }, delay);
  });
  
  return (
    <section className="text-white body-font">
      <div className='bg-black flex md:flex-row flex-col items-center'>
        <h2 className="mx-auto py-1 text-xl md:text3xl sm:text-4xl font-medium text-white text-center">Avaliação agendada!</h2>
      </div>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Aguarde para ser rediorecionado para a página de links!</h1>
          <p className="mb-8 leading-relaxed">
            Tenha seu sorriso transformado de forma saudável. Envie seus dados e aguarde o agendamento.
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
