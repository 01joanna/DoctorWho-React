'use client'
import { lato, montserrat } from './fonts'
import './globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


export default function RootLayout({ children }) {
  return (
      <html lang='en'>
        <head>
          <title>Doctor Who Official Webpage</title>
        </head>

        <body className={montserrat.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
  )
  
}