import Image from 'next/image'
import styles from './page.module.css'
import ThreadSymbol from './threadSymbol/page'
import ThreadSymbol from './threadSymbol/content'
import Navbar from '../app/Coponent/navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='container'>
      <ThreadSymbol />
      <SymbolContent />
      </div>
    </main>
  )
}
