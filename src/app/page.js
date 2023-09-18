import Image from 'next/image'
import styles from './page.module.css'
import ThreadSymbol from './threadSymbol/page'
import Navbar from '../app/Coponent/navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='container'>
      <ThreadSymbol />
      
      </div>
    </main>
  )
}
