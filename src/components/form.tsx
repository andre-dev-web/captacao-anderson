"use client"
import Image from 'next/image'

export default function Form() {
  async function Submit(e:any) 
  {
    e.preventDefault();
    const formEle = document.getElementById("formData") as HTMLFormElement;
    const formDatab = new FormData(formEle);
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzBHRSif62Air1_HLx6Iy9F71NwjbP7zBmfr2eQej5aV_hLTItWab3EJSpAWaG_Cdcc/exec',
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
  }

  return (
    <section className="text-white body-font">
      <div className='bg-orange-400 flex md:flex-row flex-col items-center py-18'>
        <h2 className="mx-auto pt-3 title-font sm:text-4xl text-3xl mb-4 font-medium text-white">É isso mesmo…A casa caiu!</h2>
      </div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image 
            className="object-cover object-center rounded" 
            alt="hero" 
            src="/cta.png"
            width={400}
            height={800}
          />
          <p className="mb-8 leading-relaxed">
            Eu vou abrir o jogo pra você, sem rodeios! Aqui não tem meia palavra!
          </p>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Esqueça tudo que você já ouviu falar sobre renda extra com milhas. <span className='text-orange-400'>Eles mentiram pra você!</span> 
          </h1>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Promessas vazias e conteudos incompletos, renda extra com milhas realmente é possível?! Cadastre-se agora e descubra!          
          </h2>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Você está prestes a ter acesso a verdade nua e crua que nenhum guru de milhas jamais te contou! Super aula secreta ao vivo 29/08/2023 terça-feira às 20h. 
          </h2>
          <form id='formData' className="w-full" onSubmit={(e) => Submit(e)}>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label className="leading-7 text-sm text-white">Nome</label>
                <input placeholder="Seu Nome" name="Nome" type="text" className="w-full bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>

            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label className="leading-7 text-sm text-white">Email</label>
                <input placeholder="Seu Email" name="Email" type="text" className="w-full bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label className="leading-7 text-sm text-white">WhatsApp</label>
                <input placeholder="Seu Whatsapp" name="Whatsapp" type="text" className="w-full bg-transparent rounded border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <button type="submit" className="inline-flex text-gray bg-orange-400 border-0 my-2 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg transition-all duration-300">Quero Saber a Verdade</button>
          </form>
        </div>
      </div>
    </section>
  )
}
