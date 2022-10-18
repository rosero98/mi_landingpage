import React from 'react'
import './Cover.css';
import covervideo from '../media/covervideo.mp4';

import Navbar from "../componentes/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "../paginas/Inicio";
import Sobremi from "../paginas/Sobremi";
import Contacto from "../paginas/Contacto";
import Portafolio from "../paginas/Portafolio";

const cover = () => {
  return (
    <div className='cover-container'>
      <video className='video'src={covervideo} autoPlay loop muted/>

      <BrowserRouter>
      <Navbar/>
        
        <Routes>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/sobremi" element={<Sobremi/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/portafolio" element={<Portafolio/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default cover