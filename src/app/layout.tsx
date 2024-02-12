import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anderson Viana | Agendamento',
  description: 'Página de agendamentos para os procedimentos da clinica',
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
