import Image from 'next/image'
import { Inter } from 'next/font/google'
// import Header from '@/components/Layout/Header'
// import Footer from '@/components/Layout/Footer'
import ProductList from '@/components/ProductList'
import Product from '@/components/Product'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (    
    
    <div>
      <Product/>
      <ProductList/>
    </div>
  )
}
