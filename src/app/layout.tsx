import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bianca Duarte | Evento',
  description: 'Instcrição no bootcamp de finaças que vai transformar sua vida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <div>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
