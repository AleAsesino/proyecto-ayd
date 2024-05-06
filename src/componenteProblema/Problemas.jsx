import React from 'react'
import Barra_navegacion from '../component/Barra_navegacion';
import Contenido1 from './Contenido1';
import Problem1 from './Problem1';
import Problem2 from './Problem2';
import Problem3 from './Problem3';
import Problem4 from './Problem4';
import Problem5 from './Problem5';
import Problem6 from './Problem6';

const Problemas = () => {
  return (
    <div className='flex flex-col'>
        <Barra_navegacion ruta={'Problemas'}/>
        <Contenido1/>
        <Problem1/>
        <Problem2/>
        <Problem3/>
        <Problem4/>
        <Problem6/>
    </div>
  )
}

export default Problemas
