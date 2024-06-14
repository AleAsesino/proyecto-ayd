import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex bg-[#070F1C] p-12 place-content-around'>
        <div className="">
            <h1 className=" text-white text-[20px] inria-serif-bold">Universidad:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2 inria-serif-regular">Ciencias Puras y Naturales UMSA</h1>
            <h1 className="text-white text-[20px] font-bold">Carrera:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2 inria-serif-regular">Informática</h1>
        </div>
        <div className="">
            <h1 className=" text-white text-[20px] inria-serif-bold">Integrantes:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2 inria-serif-regular">Choque Gutierrez Manuel Alejandro</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2 inria-serif-regular">Alvarez Portugal Luis Gael</h1>
        </div>
        <div className="">
            <h1 className=" text-white text-[20px] inria-serif-bold">Materia:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2 inria-serif-regular">Análisis y diseño de sistemas</h1>
            <h1 className="text-white text-[20px] font-bold">Supervisor:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2 inria-serif-regular">Miguel Cotana Mier</h1>
        </div>
    </div>
  )
}

export default Footer
