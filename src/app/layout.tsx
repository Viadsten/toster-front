import { ReactNode } from 'react'
import { Footer } from '@modules/footer'
import { Header } from '@modules/header'

import '@styles/global.scss'
import 'react-toastify/dist/ReactToastify.css';

import localFont from 'next/font/local'
import { ToastContainer } from 'react-toastify';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Provider } from '@/service/provider';

const font = localFont({
  src: [
    {
      path: './fonts/neuemachina-light.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/neuemachina-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/neuemachina-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/neuemachina-ultrabold.woff2',
      weight: '800',
      style: 'normal'
    }
  ]
})

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </head>
      <body>
        <Provider>
          <div id="root">
            <Header />
            {children}
            <Footer />
          </div>

          <div id="modal-root" />
        </Provider>
        <ToastContainer />
      </body>
    </html>
  )
}
