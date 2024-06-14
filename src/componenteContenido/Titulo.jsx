import React from 'react'
import imagenLogo from '../assets/logoHechopng.png'
import Barra_navegacionV2_1 from '../component/Barra_navegacionV2_1'
const Titulo = () => {
  return (
    <div className='w-full h-screen bg-[#0A192E] flex pb-40 items-center place-content-center'>
      <span className="w-[50%] flex flex-col place-content-center items-center">
        <div>
          <h1 className=" text-white text-[24px] leading-none inria-serif-bold">Hola, somos:</h1>
          <h1 className=" text-[#B5B436] text-[96px] leading-none inria-serif-bold">FullStock</h1>
          <h1 className=" text-[#9492D2] text-[32px] leading-none py-2 inria-serif-bold">Calidad para tu hogar</h1>
          <h1 className=" text-[#B1BACC] text-[20px] leading-none py-4 inria-serif-regular">Somos un supermercado que abre sus puertas,<br/> donde te ofrece productos de calidad a <br/>precios razonables. </h1>
        </div>
      </span>
      <span className="w-[50%]">
        <img className='w-[250px] h-[250px]' src={imagenLogo}/>
      </span>
      
    </div>
  )
}

export default Titulo 
