import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
// import {  } from "react";

export default function Layout({ children  }){
  return (
    <>
      <Header />
            <main>{children}</main>
      
      <Footer />
    </>
  );
}

//  Layout;
