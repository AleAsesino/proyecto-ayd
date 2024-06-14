import React from 'react'
import Barra_navegacionV2 from '../component/Barra_navegacionV2_2';

import Contenido1 from './Contenido1';
import Problem1 from './Problem1';
import Problem2 from './Problem2';
import Problem3 from './Problem3';
import Problem4 from './Problem4';
import Problem5 from './Problem5';
import Problem6 from './Problem6';
import Footer from '../component/Footer';

const Problemas = () => {
  return (
    <div className='flex flex-col'>
        
          <Barra_navegacionV2 ruta={'Problemas'}/>
          <Contenido1/>
 
        <Footer/>
    </div>
  )
}

export default Problemas
