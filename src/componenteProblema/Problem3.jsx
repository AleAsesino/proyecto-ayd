import React from 'react'
import Barra_navegacionV2 from '../component/Barra_navegacionV2_2';
const Problem3 = () => {
  return (
    <div>
      <Barra_navegacionV2 ruta={'Problemas'}/>
      <div className='w-full h-screen bg-[#0A192E] flex pt-32 pb-12 place-content-center '>
        <div className=' w-[60%]'>
            <h1 className='text-white text-[24px] p-2 inria-serif-bold'>3. Formulacion del problema</h1>
            <hr className=' border-gray-50 py-5'/>


            <div className=" w-full flex flex-col">
              <div className=" w-[55%] flex">
                <span className="text-[#42A8A2] text-[40px] inria-serif-bold">1.</span>
                <h1 className='text-[#B1BACC] text-[20px] mb-14 p-3 inria-serif-regular'>
                  ¿Cómo podemos evitar quedarnos sin suministro habiendo mucha demanda?
                </h1>
               </div>
            </div>
            
            <div className=" w-full flex flex-col items-end">
              <div className="w-[55%] flex">
                <span className="text-[#42A8A2] text-[40px] inria-serif-bold">2.</span>
                <h1 className='text-[#B1BACC] text-[20px] mb-14 p-3 inria-serif-regular'>
                    ¿Existen formas de administrar y evitar perdida de productos por caducidad o sobreprecio?
                </h1>
              </div>
            </div>

            <div className=" w-full flex flex-col">
              <div className="w-[55%] flex">
                <span className="text-[#42A8A2] text-[40px] inria-serif-bold">3.</span>
                <h1 className='text-[#B1BACC] text-[20px] mb-14 p-3 inria-serif-regular'>
                  ¿Cómo podemos evitar quedarnos sin fondos en la parte de presupuesto?
                </h1>
              </div>
            </div>



            <div className=" w-full flex flex-col items-end">
              <div className="w-[55%] flex">
                <span className="text-[#42A8A2] text-[40px] inria-serif-bold">4.</span>
                <h1 className='text-[#B1BACC] text-[20px] mb-14 p-3 inria-serif-regular'>
                  ¿Cuáles son las formas de administrar compras y pérdidas para la sostenibilidad del negocio?
                </h1>
              </div>
            </div>





        </div>



      </div>
    </div>
    
    
  )
}

export default Problem3
