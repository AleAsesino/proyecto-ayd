import React,{ useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Barra_navegacion from './component/Barra_navegacion';
import BarraLateral from './component/BarraLateral';
import Menu from './component1/Menu';
import PaginaIntro from './component2/PaginaIntro';
import Contenido1 from './componenteContenido/Contenido1';
import Problemas from './componenteProblema/Problemas';
import PaginaIntroP from './component2/PaginaIntroP';
function App() {


  return (
    <BrowserRouter>
      {/*
      <Barra_navegacion open={open} setopen={setopen}></Barra_navegacion>
      <BarraLateral open={open}/>

      ///funcional y oficial el menu
      <Menu/>
      //funcional y oficial el PaginadoIntro
      <PaginaIntro/>
      //funcional y oficial el contenido
      <Contenido1/>
      //funcional y oficial el problema
      <Problemas/>
      
      
      */}
      <Routes>
        
        <Route path='' element={<Menu/>}/>
        <Route path='/menu' element={<PaginaIntro/>}/>
        <Route path='/Inicio' element={<Contenido1/>}/>
        <Route path='/Problemas' element={<Problemas/>}/>
        <Route path='/test' element={<PaginaIntroP/>}/>
        
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
