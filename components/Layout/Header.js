import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-around  bg-sky-500">
      <Link href="/">
        <h1 className="p-3">Onshop</h1>
      </Link>
      <ul className="flex  justify-evenly">
        <Link href="/">
          <li className="p-3">Home</li>
        </Link>
        <Link href="/">
          <li className="p-3">About</li>
        </Link>
        <Link href="/">
          <li className="p-3">Products</li>               
        </Link>
        <Link href="/">
          <li className="p-3">Cart</li>
        </Link>
      </ul>
      <div className="mt-1 p-1 ">
        <Link href="/home">
          <button className="p-1 text-sky-500 bg-white mr-2 rounded-lg">
            Sign In
          </button>
        </Link>
        <Link href="/">
          <button className="p-1 text-sky-500 bg-white rounded-lg">Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
