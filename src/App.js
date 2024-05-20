import React from 'react';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Barra_navegacion from './component/Barra_navegacion';
import BarraLateral from './component/BarraLateral';
import Menu from './component1/Menu';
import PaginaIntro from './component2/PaginaIntro';
import Contenido1 from './componenteContenido/Contenido1';
import Problemas from './componenteProblema/Problemas';
import PaginaIntroP from './component2/PaginaIntroP';
import MenuV2 from './component1/MenuV2';
import DFDxNiveles from './ComponenteEstructurado/DFDxNiveles';
function App() {


  return (
    <>
      <div>
        {/*
        <Barra_navegacion open={open} setopen={setopen}></Barra_navegacion>
        <BarraLateral open={open}/>

        ///funcional y oficial el menu
        
        //funcional y oficial el PaginadoIntro
        <PaginaIntro/>
        //funcional y oficial el contenido
        <Contenido1/>
        //funcional y oficial el problema
        <Problemas/>
        <Menu/>

        si no funciona elimina el proyecto-ayp en menu para abajo solo el primer ruta no lo demas si
        */}
        
      <Router>
        
        <Routes>     
          <Route path='/proyecto-ayd' element={<MenuV2/>}/>
          <Route path='/menu' element={<PaginaIntro/>}/>
          <Route path='/Inicio' element={<Contenido1/>}/>
          <Route path='/Problemas' element={<Problemas/>}/>
          <Route path='/test' element={<PaginaIntroP/>}/>
          <Route path='/test1' element={<MenuV2/>}/>
          <Route path='/ProblemaEstructurado' element={<DFDxNiveles/>}/>
        </Routes>
      </Router>   
        
        
        
      </div>
    </>
    
  )
}

export default App
