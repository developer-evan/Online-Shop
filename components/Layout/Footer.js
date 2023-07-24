import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <div className='flex justify-around'>
      <div>
        <Link href="/">
        <h1>Onshop</h1>
        <ul>
          <li className='items-start p-2'><i class="fa fa-envelope" aria-hidden="true"></i> onshop@gmail.com</li>
          <li className='items-start p-2'><i class="fa fa-phone" aria-hidden="true"></i> +254793721334</li>
          <li className='items-start p-2'><i class="fa fa-globe" aria-hidden="true"></i> 123 Edinburgh</li>
          {/* <li><i class="fa fa-envelope" aria-hidden="true"></i> onshop@gmail.com</li> */}
        </ul>
        </Link>
      </div>
      <div>
      <ul className="flex flex-col  justify-evenly">
        <Link href="/">
          <li className="p-2">Home</li>
        </Link>
        <Link href="/">
          <li className="p-2">About</li>
        </Link>
        <Link href="/products_page">
          <li className="p-2">Products</li>
        </Link>
        <Link href="/">
          <li className="p-2">Cart</li>
        </Link>
      </ul>
      </div>
    </div>
    <hr/>
    <div className='flex justify-around p-6'>
      <h4><i class="fa fa-copyright" aria-hidden="true">Onshop 2023</i></h4>
      <h5 className='items-center'> 
      {/* <i class="fa fa-address-card" aria-hidden="true"></i>  */}
      Terms and Privacy Policy</h5>
      <ul className='flex justify-evenly'>
        <li className='pl-10 font-bold text-xl'><i class="fa fa-facebook" aria-hidden="true"></i></li>
        <li className='pl-10 font-bold text-xl'><i class="fa fa-twitter" aria-hidden="true"></i></li>
        <li className='pl-10 font-bold text-xl'><i class="fa fa-whatsapp" aria-hidden="true"></i></li>
        <li className='pl-10 font-bold text-xl'><i class="fa fa-instagram" aria-hidden="true"></i></li>
      </ul>
    </div>
    </div>
  )
}

export default Footer
