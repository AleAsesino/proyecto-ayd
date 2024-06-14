import React from 'react'
import img1 from '../assets/Piggly_Wiggly_store,_1918.png';
import img2 from '../assets/supermercado.jpg';
import Barra_navegacionV2_1 from '../component/Barra_navegacionV2_1'
const Antecedentes = () => {
  return (
    <div>
      <Barra_navegacionV2_1 ruta={'Inicio'}/>
      <div className='w-full bg-[#0A192E] flex pb-40 place-content-center pt-32'>
        <div className=' componenteContenido_controller_Intro_Ante'>
            <h1 className='text-white text-[24px] p-2 inria-serif-bold'>2. Antecedentes</h1>
            <hr className=' border-gray-50 py-5'/>



        
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
                El supermercado a diferencia de otras tiendas, este permite a los usuarios
                o individuos tener a su alcance todo una gama grande de productos, tanto como
                productos orgánicos, electrónicos, alimentos envasados y aparatos de todo tipo,
                tanto como muebles y ropa.
            </h1>



            <h1 className='text-white text-[32px] pl-2 inria-serif-bold'>Causas </h1>
            <h1 className='text-[#B1BACC] text-[20px] p-5 bg-[#172945] mb-14 inria-serif-regular'>
                            Los mercados antiguos eran pequeños y no necesitaban mucha gente para ser manejados,
                            eran eficientes pero para su escalabilidad terminaban siendo un desastre aparte de lentos
                            al atender muchos individuos, ahora teniendo 
                            hoy en dia el concepto de un supermercado, podemos llegar a pensar que tiene todo y
                            no hace falta ir de tienda a tienda y esperar a que un solo cajero te atienda.
            </h1>

            <div className='flex relative w-[100%] my-20'>
              <span className="w-[45%]">
                <img src={img1} className=''/>
              </span>
              <div className="absolute  w-[100%]">
                <div className='pl-[42%] '>
                  <h1 className=' text-white text-[32px] text-end inria-serif-bold '>Historia del supermercado</h1>
                  <h1 className='  text-[#B1BACC] text-[20px] bg-[#172945] p-5 inria-serif-regular '>El primer supermercado nacio en EEUU, en 1916 con el nombre de Piggly Wiggly en Memphis, Tennessee</h1>
                </div>
              </div>
            </div>


            <div className='flex relative w-[100%] my-20'>
              <span className="w-[50%]">
              
                <h1 className='  text-[#B1BACC] text-[20px] bg-[#172945] p-5 inria-serif-regular'>
                                    El supermercado a diferencia de otras tiendas, este permite a los usuarios
                                    o individuos tener a su alcanse todo una gama grande de productos, tanto como
                                    productos organicos, electronicos, alimentos envasados y aparatos de todo tipo,
                                    tanto como muebles y ropa.
                </h1>
              </span>
              <div className="absolute  w-[100%]">
                <div className='pl-[55%] '>
                  <img src={img2} className='w-[100%]'/>
                </div>
              </div>
            </div>
            



        </div>
      </div>
    </div>
    
  )
}

export default Antecedentes

