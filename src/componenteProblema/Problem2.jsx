import React from 'react'
import img1 from '../assets/diagramaP.png'
import Barra_navegacionV2 from '../component/Barra_navegacionV2_2';
const Problem3 = () => {
  return (
    <div>
      <Barra_navegacionV2 ruta={'Problemas'}/>
      <div className='w-full bg-[#0A192E] flex h-screen items-center pt-28 place-content-center'>
        <div className='  w-[60%]'>
            <h1 className='text-white text-[24px] p-2 inria-serif-bold'>2. Árbol de problemas</h1>
            <hr className=' border-gray-50 py-5'/>
            <div className=' flex place-content-center'>
                <img className='' src={img1}></img>
            </div>
            



        </div>



      </div>
    </div>
    
    
  )
}

export default Problem3
