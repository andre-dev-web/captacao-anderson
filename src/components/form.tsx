"use client"
import Image from 'next/image'
import { useState } from 'react';

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function Submit(e:any) {
    e.preventDefault();
    const formEle = document.getElementById("formData") as HTMLFormElement;
    const formDatab = new FormData(formEle);
    
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwITn3_e2rHUi8dfrVJ6KuVcYbmelapem2e5wLAHqEpqqWgwXC4p16TZU6xr3awa4oH/exec',
        {
          method: 'POST',
          body: formDatab,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        window.location.replace("/confirm")
      } else {
        console.log('Error submitting form');
      }
    } catch (error) {
      console.log(error);
    }
    setIsSubmitting(false);
  }

  return (
    <section className="text-white body-font">
      <div className='bg-orange-400 flex md:flex-row flex-col items-center'>
        <h2 className="mx-auto py-1 text-xl md:text3xl sm:text-4xl font-medium text-white">Aulas ao vivo encerradas!</h2>
      </div>
      
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image 
            className="object-cover object-center rounded" 
            alt="hero" 
            src="/cta.png"
            width={800}
            height={1200}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center">
          <h1 className="text-lg md:text3xl sm:text-4xl mb-4 font-medium text-white text-center">
            Os conteúdos das aulas ao vivo foram <br /><span className='text-orange-400'>transformadores!</span> 
          </h1>
          <h2 className="text-lg md:text3xl sm:text-4xl  mb-4 font-medium text-white text-center">
            Além de todo conteúdo entregamos também alguns materiais com tarefas exclusivas   
          </h2>
          <h2 className="text-lg md:text3xl sm:text-4xl  mb-4 font-medium text-white text-center">
            Se você quer ter acesso a tudo isso entre agora para o nosso grupo e fique por dentro de nossos proximos eventos e conteúdos!          
          </h2>
          <form id='formData' className="w-full flex justify-center flex-col" onSubmit={(e) => Submit(e)}>
            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-sm text-white">Nome<span className="text-red-400">*</span></label>
                <input required placeholder="Seu nome" name="Nome" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-base outline-none text-black focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>

            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-sm text-white">Email<span className="text-red-400">*</span></label>
                <input required placeholder="Seu email" name="Email" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-base outline-none text-black focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            
            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-sm text-white">WhatsApp<span className="text-red-400">*</span></label>
                <input required placeholder="Seu whatsapp" name="Whatsapp" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-base outline-none text-black focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-1/2 inline-flex justify-center text-gray bg-orange-400 border-0 my-2 py-2 focus:outline-none hover:bg-orange-500 rounded text-lg transition-color duration-300">{isSubmitting ? 'Enviando...' : 'Quero Saber a Verdade'}</button>
          </form>
        </div>
      </div>
    </section>
  )
}