import React from 'react'

const Introduccion = () => {
  return (
    <div className='w-full bg-[#0A192E] flex pb-40 place-content-center'>
        <div className='  w-[40%]'>
            <h1 className='text-white text-[24px] p-2'>1. Introducción</h1>
            <hr className=' border-gray-50'/>



            <h1 className='text-white text-[32px] p-2'>¿Cuál es nuestro proyecto?</h1>
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14'>
                            El proyecto consiste en crear un sistema para administrar un supermercado,
                            hoy en dia los consumidores o clientes necesitan a su alcance productos
                            por lo cual nosotros entramos en este tema.
            </h1>



            <h1 className='text-white text-[32px] p-2'>Objetivos del proyecto </h1>
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14'>
                            El sistema debe ser eficiente y tener los estandares de calidad para su
                            uso comercial, debe ser eficar y poder sostener problemas futuros que pueda
                            presentarse. El objeto principal es ofrecer a los clientes productos y que
                            tenga una experiencia buena con nuestro supermercado.
            </h1>

        </div>
    </div>
  )
}

export default Introduccion
