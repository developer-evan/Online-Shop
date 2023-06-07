import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='flex justify-around'>
      <div>
        <Link href="/">
        <h1>Onshop</h1>
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
        <Link href="/">
          <li className="p-2">Products</li>
        </Link>
        <Link href="/">
          <li className="p-2">Cart</li>
        </Link>
      </ul>
      </div>
    </div>
  )
}

export default Footer
