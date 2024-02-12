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
        'https://script.google.com/macros/s/AKfycbyhGsGBBVOwVKUd1bCv51YEH0ABDbKeo46wxZPEJR5YuZmjExqAlsFxNZl6JBTc1_HM/exec',
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
                <label className="leading-7 text-sm text-white">Nome<span className="text-red-400">*</span></label>
                <input required placeholder="Seu nome" name="Nome" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 text-base outline-none text-black focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>

            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-sm text-white">Email<span className="text-red-400">*</span></label>
                <input required placeholder="Seu email" name="Email" type="text" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 text-base outline-none text-black focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            
            <div className="flex w-full justify-center ">
              <div className="mr-4 w-full">
                <label className="leading-7 text-sm text-white">Procedimento<span className="text-red-400">*</span></label>
                <select required name="procedimento" id="procedimento" className="w-full bg-white focus:bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 text-gray-400 text-base outline-none text-base focus:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  <option value="nulo" className="text-black">Clique para selecionar</option>
                  <option value="Implante" className="text-black">Implante</option>
                  <option value="Carga imediata" className="text-black">Carga imediata</option>
                  <option value="Bichectomia" className="text-black">Bichectomia</option>
                  <option value="Prótese" className="text-black">Prótese</option>
                </select>
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-1/2 inline-flex justify-center text-gray bg-indigo-900 border-0 my-2 py-2 focus:outline-none hover:bg-indigo-950 rounded transition-color duration-300">{isSubmitting ? 'Enviando...' : 'Quero agendar a avaliação'}</button>
          </form>
        </div>
      </div>
    </section>
  )
}
