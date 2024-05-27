import React from 'react'
import ImgInv from '../../assets/SubSistemaInv.png'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
const MA_rrhh = () => {
  return (
    <>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className='w-full h-screen'>
            <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>1. Declaración de propósitos</h1>
                    <hr className=' border-gray-50'/>
                    <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 m-5'>
                                    null
                    </h1>  


                    <h1 className='text-white text-[24px] p-2'>2. Declaración de propósitos</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={ImgInv}/>
                    </div>
                    
                    <h1 className='text-white text-[24px] p-2'>3. Lista de acontecimientos</h1>
                    <hr className=' border-gray-50'/>
                    <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 m-5'>
                                    null    
                    </h1>  

                
                    
                

                </div>
            </div>
        </div> 
        
    </>
  )
}

export default MA_rrhh
