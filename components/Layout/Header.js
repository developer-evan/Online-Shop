import React from "react";
import Link from "next/link";
import { FaBlog, FaHouseUser, FaLock, FaProductHunt, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="flex justify-around  bg-sky-500">
      <Link href="/">
        <h1 className="p-3">Onshop</h1>
      </Link>
      <ul className="flex  justify-evenly">
        <Link href="/">
          <li className="p-3 flex items-center"><FaHouseUser/> Home</li>
        </Link>
        <Link href="/">
          <li className="p-3 flex items-center"><FaBlog/> About</li>
        </Link>
        <Link href="/products_page">
          <li className="p-3 flex items-center"><FaProductHunt/> Products</li>               
        </Link>
        <Link href="/">
          <li className=" flex items-center p-3 text-white-500 "><FaLock/> Sign up</li>
        </Link>
        
      </ul>
      <div >
        {/* <Link href="/home">
          <button className="p-1 text-sky-500 bg-white mr-2 rounded-lg">
            Sign In
          </button>
        </Link>
        <Link href="/">
          <button className="p-1 text-sky-500 bg-white rounded-lg">Sign up</button>
        </Link> */}
        <Link href="/">
          <li className="p-3 flex items-center text-2xl"><FaShoppingCart/></li>
        </Link>
      </div>
    </div>
  );
}

export default Header;
