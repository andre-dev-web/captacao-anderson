import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="bg-black bg-opacity-50 pt-1 flex items-center">
        <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="pb-2 text-white text-sm text-center sm:text-left">© Copyright — Anderson Viana</p>
          <span className="inline-flex sm:ml-auto justify-center sm:justify-start">
            <a href="https://instagram.com/dr_andersoncviana?igshid=NzZlODBkYWE4Ng==" className="text-white hover:scale-125 hover:text-indigo-900 transition-all duration-300"  target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                <FaInstagram/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100089959422397&mibextid=ZbWKwL" className="ml-3 text-white hover:scale-125 hover:text-indigo-900 transition-all duration-300"  target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-7 h-7" viewBox="0 0 24 24">
                <FaFacebook/>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
