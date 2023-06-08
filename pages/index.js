import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ProductList from '@/components/ProductList'
import Product from '@/components/Product'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    // <div>
        
    //   </div>
    // </main>
    // <div className='flex justify-around  bg-sky-500' >
    //       <h1 className='p-2'>Onshop</h1>
    //       <ul className='flex  justify-evenly'>
    //         <li className='p-2'>Home</li>
    //         <li className='p-2'>About</li>
    //         <li className='p-2'>Products</li>
    //         <li className='p-2'>Cart</li>
    //       </ul>
    //       <div className='mt-1 '>
    //       <button className='p-1 text-sky-500 bg-white mr-2 round'>Sign In</button>
    //       <button className='p-1 text-sky-500 bg-white'>Sign up</button>
    //       </div>
    //     </div>
    
    <div>
      <Product/>
      <ProductList/>
    </div>
  )
}
