"use client"
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
        'https://script.google.com/macros/s/AKfycbw9m_WD1eGGOElIcheLOmaxFpp3wDQa08Y1OzYsiMOKCiEN-q9VeaT4eG3dOKMxnDHN/exec',
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
      <div className='bg-opacity-50 bg-black flex md:flex-row flex-col items-center'>
        <h2 className="mx-auto py-1 my-4 text-xl md:text3xl sm:text-4xl font-medium text-white">Avaliação Gratuita!</h2>
      </div>
      
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center">
          <h1 className="text-2xl mb-4 font-medium text-white text-center">
            Tenha seu sorriso transformado de forma saudável. Envie seus dados e aguarde o agendamento.
          </h1>
          <form id='formData' className="w-full flex justify-center flex-col" onSubmit={(e) => Submit(e)}>
            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-md text-white">Nome<span className="text-red-400">*</span></label>
                <input required placeholder="Seu nome" name="Nome" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 text-base outline-none text-black focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>

            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-md text-white">Email<span className="text-red-400">*</span></label>
                <input required placeholder="Seu email" name="Email" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 text-base outline-none text-black focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            
            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-md text-white">Procedimento<span className="text-red-400">*</span></label><br/>
                
                <input type="radio" name="procedimento" value="Implante"/>
                <label htmlFor="Implante className='ml-1'">Implante</label>

                <input type="radio" name="procedimento" value="Carga imediata" className='ml-2'/>
                <label htmlFor="Cargaimediata" className='ml-1'>Carga imediata</label>

                <input type="radio" name="procedimento" value="Faceta" className='ml-2'/>
                <label htmlFor="Faceta" className='ml-1'>Faceta</label>

                <input type="radio" name="procedimento" value="Bichectomia" className='ml-2'/>
                <label htmlFor="Bichectomia" className='ml-1'>Bichectomia</label>
                
                <input type="radio" name="procedimento" value="Clareamento" className='ml-2'/>
                <label htmlFor="Clareamento" className='ml-1'>Clareamento</label>

                <input type="radio" name="procedimento" value="Prótese" className='ml-2'/>
                <label htmlFor="Protese" className='ml-1'>Prótese</label>
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-1/2 inline-flex justify-center text-gray bg-indigo-900 border-0 my-2 py-2 focus:outline-none hover:bg-indigo-950 rounded transition-color duration-300">{isSubmitting ? 'Enviando...' : 'Quero agendar a avaliação'}</button>
          </form>
        </div>
      </div>
    </section>
  )
}
