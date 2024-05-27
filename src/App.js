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
import Barra_navegacionV2 from './component/Barra_navegacionV2';
/*Sistema Estructurado */
import MA_Inventario from './ComponenteEstructurado/SistemaInventario/MA_Inventario';
import DFDxN_Inventario from './ComponenteEstructurado/SistemaInventario/DFDxN_Inventario';
import DD_Inventario from './ComponenteEstructurado/SistemaInventario/DD_Inventario';

import MA_compras from './ComponenteEstructurado/SistemaCompras/MA_compras';
import DFDxN_compras from './ComponenteEstructurado/SistemaCompras/DFDxN_compras';
import DD_compras from './ComponenteEstructurado/SistemaCompras/DD_compras';

import MA_rrhh from './ComponenteEstructurado/SistemaRRHH/MA_rrhh';
import DFDxN_rrhh from './ComponenteEstructurado/SistemaRRHH/DFDxN_rrhh';
import DD_rrhh from './ComponenteEstructurado/SistemaRRHH/DD_rrhh';


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
          <Route path='/test1' element={<Barra_navegacionV2 ruta={'Test1'}/>}/>
          <Route path='/ProblemaEstructurado' element={<DFDxNiveles/>}/>

          {/*modelo estructurado de inventario */}
          <Route path='/MA_Inventario' element={<MA_Inventario/>}/>
          <Route path='/DFDxN_Inventario' element={<DFDxN_Inventario/>}/>
          <Route path='/DD_Inventario' element={<DD_Inventario/>}/>
          {/*modelo estructurado de compras */}
          <Route path='/MA_compras' element={<MA_compras/>}/>
          <Route path='/DFDxN_compras' element={<DFDxN_compras/>}/>
          <Route path='/DD_compras' element={<DD_compras/>}/>
          {/*modelo estructurado de rrhh */}
          <Route path='/MA_rrhh' element={<MA_rrhh/>}/>
          <Route path='/DFDxN_rrhh' element={<DFDxN_rrhh/>}/>
          <Route path='/DD_rrhh' element={<DD_rrhh/>}/>
        </Routes>
      </Router>   
        
        
        
      </div>
    </>
    
  )
}

export default App
