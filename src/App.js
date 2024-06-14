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
import MA_Inventario2 from './ComponenteEstructurado/SistemaInventario/MA_Inventario2';
import MA_Inventario3 from './ComponenteEstructurado/SistemaInventario/MA_Inventario3';

import MA_compras from './ComponenteEstructurado/SistemaCompras/MA_compras';
import MA_compras2 from './ComponenteEstructurado/SistemaCompras/MA_compras2';
import MA_compras3 from './ComponenteEstructurado/SistemaCompras/MA_compras3';
import DFDxN_compras from './ComponenteEstructurado/SistemaCompras/DFDxN_compras';
import DD_compras from './ComponenteEstructurado/SistemaCompras/DD_compras';

import MA_rrhh from './ComponenteEstructurado/SistemaRRHH/MA_rrhh';
import MA_rrhh2 from './ComponenteEstructurado/SistemaRRHH/MA_rrhh2';
import MA_rrhh3 from './ComponenteEstructurado/SistemaRRHH/MA_rrhh3';
import DFDxN_rrhh from './ComponenteEstructurado/SistemaRRHH/DFDxN_rrhh';
import DD_rrhh from './ComponenteEstructurado/SistemaRRHH/DD_rrhh';

/*problemas */
import Contenido11 from './componenteProblema/Contenido1';
import Problem1 from './componenteProblema/Problem1';
import Problem2 from './componenteProblema/Problem2';
import Problem3 from './componenteProblema/Problem3';
import Problem4 from './componenteProblema/Problem4';
import Problem5 from './componenteProblema/Problem5';
import Problem6 from './componenteProblema/Problem6';
/*inicio */
import Introduccion from './componenteContenido/Introduccion';
import Antecedentes from './componenteContenido/Antecedentes';
/*poo */
import OrientadoPOO from './ComponentePOO/OrientadoPOO';
import POOcompras from './ComponentePOO/POOcompras';
import POOinventario from './ComponentePOO/POOinventario';

import POOcomprasCUN from './ComponentePOO/POOcompraCUN';
import POOcomprasExpandido from './ComponentePOO/POOcompraExpandido';
import POOinventariCUN from './ComponentePOO/POOinventariCUN';
import POOinventarioExpandido from './ComponentePOO/POOinventarioExpandido';



import Galeria from './component1/Galeria';
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
          {/*rutas inicio*/}
          <Route path='/Inicio' element={<Contenido1/>}/>
          <Route path='/Inicio/introduccion' element={<Introduccion/>}/>
          <Route path='/Inicio/antedentes' element={<Antecedentes/>}/>
          {/*rutas de problemas :c */}
          <Route path='/Problemas' element={<Problemas/>}/>
          <Route path='/Problemas/contenido' element={<Contenido11/>}/>
          <Route path='/Problemas/problem1' element={<Problem1/>}/>
          <Route path='/Problemas/problem2' element={<Problem2/>}/>
          <Route path='/Problemas/problem3' element={<Problem3/>}/>
          <Route path='/Problemas/problem4' element={<Problem4/>}/>
          <Route path='/Problemas/problem5' element={<Problem5/>}/>
          <Route path='/Problemas/problem6' element={<Problem6/>}/>
          {/*///////////////// */}
        
          <Route path='/ProblemaEstructurado' element={<DFDxNiveles/>}/>

          {/*modelo estructurado de inventario */}
          <Route path='/MA_Inventario' element={<MA_Inventario/>}/>
          <Route path='/MA_Inventario2' element={<MA_Inventario2/>}/>
          <Route path='/MA_Inventario3' element={<MA_Inventario3/>}/>
          <Route path='/DFDxN_Inventario' element={<DFDxN_Inventario/>}/>
          <Route path='/DD_Inventario' element={<DD_Inventario/>}/>
          {/*modelo estructurado de compras */}
          <Route path='/MA_compras' element={<MA_compras/>}/>
          <Route path='/MA_compras2' element={<MA_compras2/>}/>
          <Route path='/MA_compras3' element={<MA_compras3/>}/>
          <Route path='/DFDxN_compras' element={<DFDxN_compras/>}/>
          <Route path='/DD_compras' element={<DD_compras/>}/>
          {/*modelo orientado a objetos */}
          <Route path='/AYDOO' element={<OrientadoPOO/>}/>
          <Route path='/ComprasPOO' element={<POOcompras/>}/>
          <Route path='/InvPOO' element={<POOinventario/>}/>

          <Route path='/ComprasCUN' element={<POOcomprasCUN/>}/>
          <Route path='/InvCUN' element={<POOinventariCUN/>}/>

          <Route path='/ComprasEx' element={<POOcomprasExpandido/>}/>
          <Route path='/InvEx' element={<POOinventarioExpandido/>}/>
          

          {/*Parte final */}
          <Route path='/Galeria' element={<Galeria/>}/>

        </Routes>
      </Router>   
        
      </div>
    </>
    
  )
}

export default App
