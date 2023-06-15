import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Old Age Voters App',
  description: 'Voters app for Old Age',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar/>
          </main>
        {children}
        <div></div>
        <span></span>
        <Footer/>
      </body>
    </html>
  )
}
