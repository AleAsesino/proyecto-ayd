import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex bg-[#070F1C] p-12 place-content-around'>
        <div className="">
            <h1 className=" text-white text-[20px] font-bold">Facultad:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2">Ciencias Puras y Naturales</h1>
            <h1 className="text-white text-[20px] font-bold">Carrera:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2">Informática</h1>
        </div>
        <div className="">
            <h1 className=" text-white text-[20px] font-bold">Integrantes:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2">Choque Gutierrez Manuel Alejandro</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2">Claros Choquemisa Cesar Raymundo</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2">Vasquez zuñagua carlos kevin</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2">Maquera Ochoa Hebert</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2">Alvarez Portugal Luis Gael</h1>
        </div>
        <div className="">
            <h1 className=" text-white text-[20px] font-bold">Materia:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2">Análisis y diseño de sistemas</h1>
            <h1 className="text-white text-[20px] font-bold">Supervisor:</h1>
            <h1 className="text-[16px] text-[#B1BACC] leading-none p-2">Miguel Cotana Mier</h1>
        </div>
    </div>
  )
}

export default Footer
