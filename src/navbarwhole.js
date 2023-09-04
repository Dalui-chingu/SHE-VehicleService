import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';
import Navbar from './navbar';
import About from './About';
import { BrowserRouter } from 'react-router-dom';
export default function Navbarwhole() {
  
    const [isopen, setisopen] = useState(false);
    const toggle = () => {
      setisopen(!isopen);
    };
  
    return (
      <>
        <Navbar toggle={toggle} />
        <Sidebar isopen={isopen} toggle={toggle} />
        
      </>

    );
}
