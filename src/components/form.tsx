import Image from 'next/image'

export default function Form() {
  return (
    <section className="text-gray-600 body-font">
      <div className='bg-orange-400 flex md:flex-row flex-col items-center py-18'>
        <h2 className="mx-auto pt-3 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">É isso mesmo…A casa caiu!</h2>
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
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Esqueça tudo que você já viu e ouviu falar sobre renda extra com milhas. Eles mentiram pra você! 
          </h1>
          <p className="mb-8 leading-relaxed">
            Você está prestes a descobrir a verdade nua e crua que nenhum guru de milhas jamais te contou!<br/>
            Super aula secreta ao vivo 29/08/2023 terça-feira às 20h.<br/>
            Se você gosta de ser enganado e fica ai dando atenção pra quem não te entrega nada, só promessas vazias e que nunca te geraram nenhum resultado de fato, esquece que essa aula não é pra você! 
            Mas se você quer ter acesso a VERDADE, se quer realmente construir RESULTADOS através do mundo das milhas clique agora no link e tenha acesso a essa nova era.
          </p>
          
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label className="leading-7 text-sm text-gray-600">Nome</label>
              <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-orange-200 focus:bg-transparent focus:border-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>

          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-orange-200 focus:bg-transparent focus:border-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label className="leading-7 text-sm text-gray-600">WhatsApp</label>
              <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-orange-200 focus:bg-transparent focus:border-orange-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <a href="/confirm">
            <button className="inline-flex text-gray bg-orange-400 border-0 my-2 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Quero Saber a Verdade</button>
          </a>
        </div>
      </div>
    </section>
  )
}
