import React from 'react'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
import ImgInv from '../../assets/SubSistemaInv.png'
import ImgInv1 from '../../assets/subsistemaInventario.png'
import ImgInv2 from '../../assets/subsistemaInventarioN2G1.png'
const DFDxN_Inventario = () => {
  return (
    <div>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className='w-full h-screen'>
            <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>Diagrama de flujo de datos por niveles</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={ImgInv}/>
                    </div>
                    <h1 className='text-white text-[24px] p-2'>Nivel 1</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={ImgInv1}/>
                    </div>
                    
                    <h1 className='text-white text-[24px] p-2'>Nivel 2</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={ImgInv2}/>
                    </div>

                    
                    
                

                </div>
            </div>
        </div> 
    </div>
  )
}

export default DFDxN_Inventario
