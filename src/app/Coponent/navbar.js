import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import About from '../about/page';
import PrivacyPolicy from '../privacyPolicy/page';
import EmojiContainer from '../emoji/page';


const NavbarHeader = ()=>{

 return(
    <>
    
    <Head>
        <title>Threads Symbol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="main-navbar flex items-center sticky flex-wrap bg-white shadow-sm">
  <a className='logo' href="https://threadsymbol.link/">Threads Symbol</a>
      <div
        className="navbar-menu inline-flex text-white p-3 rounded lg:hidden text-slate-600 ml-auto outline-none"
      
      >

        <div className="inline-container lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto p-2">
          <Link href="/" className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-black font-medium items-center justify-center hover:bg-slate-500 hover:text-white ">
          
              Home
            
          </Link>
          <Link href="/about" className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-black font-medium items-center justify-center hover:bg-slate-500 hover:text-white">
             About us
          </Link>
          <Link href="/emoji" className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-black font-medium items-center justify-center hover:bg-slate-500 hover:text-white">
            Emoji
          </Link>
          <Link href="/privacyPolicy" className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-black font-medium items-center justify-center hover:bg-slate-500 hover:text-white">
         
              Privacy Policy
              
          </Link>
        
          <Link href="mailto:manisharoracode@gmail.com" className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-black font-medium items-center justify-center hover:bg-slate-500 hover:text-white">
         
              Contact Us
          
          </Link>
        </div>
      </div>
    </nav>
    </>
 )   
}

export default NavbarHeader