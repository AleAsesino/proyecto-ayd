import React from 'react'
import imagenLogo from '../assets/logoHechopng.png'
const Titulo = () => {
  return (
    <div className='w-full bg-[#0A192E] pt-52 flex pb-40'>
      <span className="w-[50%] pl-[15%]">
        <h1 className=" text-white text-[24px] leading-none ">Hola, somos:</h1>
        <h1 className=" text-[#B5B436] text-[96px] leading-none ">FullStock</h1>
        <h1 className=" text-[#9492D2] text-[32px] leading-none py-2">Calidad para tu hogar</h1>
        <h1 className=" text-[#B1BACC] text-[20px] leading-none py-4">Somos un supermercado que abre sus puertas,<br/> donde te ofrece productos de calidad a <br/>precios razonables. </h1>
      </span>
      <span className="w-[50%] flex items-center">
        <img className='w-[250px] h-[250px]' src={imagenLogo}/>
      </span>
      
    </div>
  )
}

export default Titulo 
