import React from 'react'
import Barra_navegacionV2 from '../../component/Barra_navegacionV2'
import Img from '../../assets/SC.png'
import Img1 from '../../assets/SCG0.png'
import Img2 from '../../assets/SCG1.png'
import Img3 from '../../assets/SCG2.png'
const DFDxN_compras = () => {
  return (
    <div>
        <Barra_navegacionV2 ruta={'A&D_Estructurado'}/>
        <div className='w-full h-screen'>
            <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>Diagrama de flujo de datos por niveles</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={Img}/>
                    </div>
                    <h1 className='text-white text-[24px] p-2'>Nivel 1</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={Img1}/>
                    </div>
                    
                    <h1 className='text-white text-[24px] p-2'>Nivel 2</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={Img2}/>
                    </div>
                    <h1 className='text-white text-[24px] p-2'>Nivel 2</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={Img3}/>
                    </div>

                    
                    
                

                </div>
            </div>
        </div> 
    </div>
  )
}

export default DFDxN_compras
