import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="bg-orange-400 pt-1 flex items-center">
        <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">© Copyright —
            <a href="mailto:suporte@felipemilhas.com.br" rel="noopener noreferrer" className="hover:scale-125 transition-all duration-300 underline ml-1" target="_blank">Felipe Milhas</a>
          </p>
          <span className="inline-flex sm:ml-auto justify-center sm:justify-start">
            <a href="https://www.instagram.com/felipemilhas_/" className="text-white hover:scale-125 transition-all duration-300">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                <FaInstagram/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@turbinandomilhas" className="ml-3 text-white hover:scale-125 transition-all duration-300">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                <FaYoutube/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100071971836165" className="ml-3 text-white hover:scale-125 transition-all duration-300">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                <FaFacebook />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
