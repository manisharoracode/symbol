import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Symbol Copy and Paste for Threads App' ,
  description: 'Symbol Copy and Paste for Threads App 📋 Paste 👌',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-0'>{children}</body>
    </html>
  )
}
