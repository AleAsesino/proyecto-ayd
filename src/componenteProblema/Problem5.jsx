import React from 'react'
import Barra_navegacionV2 from '../component/Barra_navegacionV2_2';
//no hay noticias de este modulo f
const Problem5 = () => {
  return (
    <div>
      <Barra_navegacionV2 ruta={'Problemas'}/>
      <div className='w-full bg-[#0A192E] flex pt-28 pb-12 place-content-center'>
        <div className='  w-[60%]'>
            <h1 className='text-white text-[24px] p-2'>2. Antecedentes</h1>
            <hr className=' border-gray-50 py-5'/>



        
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14'>
                El supermercado a diferencia de otras tiendas, este permite a los usuarios
                o individuos tener a su alcance todo una gama grande de productos, tanto como
                productos orgánicos, electrónicos, alimentos envasados y aparatos de todo tipo,
                tanto como muebles y ropa.
            </h1>
        </div>



      </div>
    </div>
    
    
  )
}

export default Problem5
