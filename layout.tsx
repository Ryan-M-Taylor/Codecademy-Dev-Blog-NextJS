import './globals.css'
import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'
import UrlBar from '../components/UrlBar/UrlBar'
import {inter} from './fonts'
import Script from 'next/script'
import type {Metadata} from 'next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Codecademy &lt;Dev&gt; Blog</title>
        <meta property="description" content="A portal for Codecademy thoughts"/>
      </head>
      <body className={inter.className}>
        <div className="urlBar">
          <UrlBar baseURL="http://localhost:4001" />
        </div>
        <Nav />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
          strategy='afterInteractive'
        ></Script>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
          strategy='afterInteractive'
        ></Script>
        {children}
        <Footer />
      </body>
    </html>
  )
}
