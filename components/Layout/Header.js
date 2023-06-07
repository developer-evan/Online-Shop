import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-around  bg-sky-500">
      <Link href="/">
        <h1 className="p-2">Onshop</h1>
      </Link>
      <ul className="flex  justify-evenly">
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
      <div className="mt-1 ">
        <Link href="/home">
          <button className="p-1 text-sky-500 bg-white mr-2 round">
            Sign In
          </button>
        </Link>
        <Link href="/">
          <button className="p-1 text-sky-500 bg-white">Sign up</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
