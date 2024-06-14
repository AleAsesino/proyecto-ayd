import React from 'react'
import Img from '../assets/POOInventario.png'
import Barra_navegacionPOO from '../component/Barra_navegacionPOO'
const POOinventarioExpandido = () => {
    return (
        <div>
            <Barra_navegacionPOO ruta={'A&D_Orientado_a_objetos'}/>
            <div className='w-full h-screen'>
            <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
                <div className='  componenteContenido_controller_Intro_Ante_Estructurado pt-40'>
                    <h1 className='text-white text-[24px] p-2'>Modelo Expandido</h1>
                    <hr className=' border-gray-50'/>
                    <div className='p-5'>
                      <img className='bg-[#172945]' src={Img}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default POOinventarioExpandido
