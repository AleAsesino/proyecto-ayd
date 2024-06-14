import React from 'react'
import ImgInv from '../../assets/SC.png'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
const MA_compras2 = () => {
  return (
    <>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className=''>
            <div className='w-full h-screen bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    


                    <h1 className='text-white text-[24px] p-2'>2. Diagrama de contexto</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={ImgInv}/>
                    </div>
                    
                    

                
                    
                

                </div>
            </div>
        </div> 
        
    </>
  )
}

export default MA_compras2
