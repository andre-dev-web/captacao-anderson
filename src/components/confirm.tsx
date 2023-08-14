"use client"
import Image from 'next/image'
import { useEffect } from 'react';

export default function Confirm() {
  const urlRedirecionamento = "https://chat.whatsapp.com/IsHbLDDlCka2HwZdcAmKiy";
  useEffect(() => {
    const delay = 10000;

    const timeout = setTimeout(() => {
      window.location.replace(urlRedirecionamento);
    }, delay);
  });
  
  return (
    <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image 
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
            alt="hero" 
            src="/logo.png"
            width={400}
            height={800}
          />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Este foi o primeiro passo para mudar sua vida</h1>
          <p className="mb-8 leading-relaxed">
            Você já esta inscrito nas aulas grátuitas, você sera redirecionado para o grupo onde diremos as datas das aulas, então entre e fique atento para não perder nenhuma.
          </p>
        </div>
      </div>
    </section>
  )
}
