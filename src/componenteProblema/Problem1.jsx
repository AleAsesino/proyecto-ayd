import React from 'react'
import Barra_navegacionV2 from '../component/Barra_navegacionV2_2';
import { Link } from 'react-router-dom';
const Problem1 = () => {
  return (
    <div>
      <Barra_navegacionV2 ruta={'Problemas'}/>
      <div className='w-full bg-[#0A192E] flex h-screen items-center place-content-center'>
        <div className='  w-[60%]'>
            <h1 className='text-white text-[24px] p-2 inria-serif-bold'>1. Planteamiento del problema </h1>
            <hr className=' border-gray-50'/>
            



            <div className='p-10 flex gap-4'>
                <div className="bg-[#172945] w-[50%] p-[4%] rounded-xl">
                    <div className='flex pb-5'>
                        <span className="w-full">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.42859 11.4286H28.5714V27.4286C28.5714 28.0348 28.3305 28.6162 27.902 29.0448C27.4734 29.4734 26.8919 29.7143 26.2857 29.7143H5.7143C5.10809 29.7143 4.52671 29.4734 4.09805 29.0448C3.66941 28.6162 3.42859 28.0348 3.42859 27.4286V11.4286Z" stroke="#5EA8FF"/>
                        <path d="M30.8571 9.14291V4.57148C30.8571 3.30913 29.8338 2.28577 28.5714 2.28577H3.42854C2.16617 2.28577 1.14282 3.30913 1.14282 4.57148V9.14291C1.14282 10.4053 2.16617 11.4286 3.42854 11.4286H28.5714C29.8338 11.4286 30.8571 10.4053 30.8571 9.14291Z" stroke="#5EA8FF"/>
                        <path d="M12.5714 18.2858H19.4286" stroke="#5EA8FF"/>
                        </svg>

                        </span>
                        <span className="w-full flex place-content-end">
                            <Link to='/MA_Inventario' className=' ' href='google.com'>
                                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.8572 18.2857V28.5714C30.8572 29.1776 30.6163 29.759 30.1877 30.1876C29.7591 30.6162 29.1776 30.8571 28.5715 30.8571H3.4286C2.82238 30.8571 2.24101 30.6162 1.81235 30.1876C1.3837 29.759 1.14288 29.1776 1.14288 28.5714V3.42854C1.14288 2.82232 1.3837 2.24095 1.81235 1.81229C2.24101 1.38364 2.82238 1.14282 3.4286 1.14282H13.7143" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22.8572 1.14282H30.8572V9.14282" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M30.8571 1.14282L16 16" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </Link>
                        
                        </span> 
                    </div>
                    <div>
                        <h1 className='text-white text-[24px] py-2 inria-serif-bold'>Sistema de Inventario</h1>
                        <h1 className='text-[#B1BACC] text-[20px] py-2 inria-serif-regular'>Poder manejar los productos y evitar una escases de suministro es vital. </h1>
                    </div>
                    

                </div>


                <div className="bg-[#172945] w-[50%] p-[4%] rounded-xl">
                    <div className='flex pb-5'>
                        <span className="w-full">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.42859 11.4286H28.5714V27.4286C28.5714 28.0348 28.3305 28.6162 27.902 29.0448C27.4734 29.4734 26.8919 29.7143 26.2857 29.7143H5.7143C5.10809 29.7143 4.52671 29.4734 4.09805 29.0448C3.66941 28.6162 3.42859 28.0348 3.42859 27.4286V11.4286Z" stroke="#5EA8FF"/>
                        <path d="M30.8571 9.14291V4.57148C30.8571 3.30913 29.8338 2.28577 28.5714 2.28577H3.42854C2.16617 2.28577 1.14282 3.30913 1.14282 4.57148V9.14291C1.14282 10.4053 2.16617 11.4286 3.42854 11.4286H28.5714C29.8338 11.4286 30.8571 10.4053 30.8571 9.14291Z" stroke="#5EA8FF"/>
                        <path d="M12.5714 18.2858H19.4286" stroke="#5EA8FF"/>
                        </svg>

                        </span>
                        <span className="w-full flex place-content-end">
                            <Link to='/MA_compras' className=' ' href='google.com'>
                                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.8572 18.2857V28.5714C30.8572 29.1776 30.6163 29.759 30.1877 30.1876C29.7591 30.6162 29.1776 30.8571 28.5715 30.8571H3.4286C2.82238 30.8571 2.24101 30.6162 1.81235 30.1876C1.3837 29.759 1.14288 29.1776 1.14288 28.5714V3.42854C1.14288 2.82232 1.3837 2.24095 1.81235 1.81229C2.24101 1.38364 2.82238 1.14282 3.4286 1.14282H13.7143" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22.8572 1.14282H30.8572V9.14282" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M30.8571 1.14282L16 16" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </Link>
                        
                        </span> 
                    </div>
                    <div>
                        <h1 className='text-white text-[24px] py-2 inria-serif-bold'>Sistema de compras</h1>
                        <h1 className='text-[#B1BACC] text-[20px] py-2 inria-serif-regular'>Hacer seguimiento al capital para evitar quedarse sin fondos puede quitar el factor muerte temprana del negocio. </h1>
                    </div>
                    

                </div>




                
            </div>


            




        </div>
    </div>

    </div>
  )
}

export default Problem1

