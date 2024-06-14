import React from 'react'
import img1 from '../assets/logoHechopng.png'
import img2 from '../assets/8782.jpg'
import {useNavigate} from 'react-router-dom'


const MenuV2 = () => {
    const enrutador = useNavigate();
    const Activar = ()=>{
        
        enrutador('/Inicio');
    }
    const ActivarProblemas = ()=>{
        enrutador('/Problemas');
    }
    const ActivarEstructurado = ()=>{
        enrutador('/ProblemaEstructurado');
    }
    const ActivarOO = ()=>{
        enrutador('/AYDOO');
    }
    const ActivarG = ()=>{
        enrutador('/Galeria');
    }

    return (
    <div className='w-full h-screen bg-[#151515] grid grid-cols-3 gap-8 p-8'>
            <div className="bg-[#1F1F1F] col-span-2 rounded-2xl fondoMenu">
                <div className='flex flex-row place-items-center bg-[#1f1f1f9a] w-full h-[100%] relative'>

                    <div className="pl-[10%]">
                        <img className=' w-[250px] h-[250px]' src={img1}/>
                    </div>

                    <div className="pl-[1%] pb-[5%]">
                        <h1 className="text-[#A08949] text-[40px] leading-none inria-serif-bold">FullStock</h1>
                        <h1 className="text-[#9492D2] text-[24px] leading-tight inria-serif-bold">CALIDAD PARA TU HOGAR</h1>
                        <h1 className="text-[#C7C7C7] text-[24px] leading-none inria-serif-bold">Proyecto de Sistema de<br/> supermercado</h1>
                    </div>

                    <div className="2xl:pl-[12%] 2xl:pb-[5%] 2xl:absolute 2xl:w-full 2xl:flex 2xl:flex-col 2xl:items-end 2xl:pr-10 sm:hidden">
                        <div>
                        <h1 className='text-[25px] text-[#C2C2C2]  inria-serif-bold leading-tight'>Integrantes:</h1>
                        <h1 className='text-[20px] text-[#46BBA6]  inria-serif-light leading-none pl-5'>Choque Gutierrez Manuel Alejandro<br/>
                            Alvarez Portugal Luis Gael   
                        </h1>
                        </div>
                    </div>

                </div>

            </div>



        <div className=" flex flex-col gap-8">
            <div className="bg-[#1F1F1F] rounded-2xl h-[50%] flex items-end place-content-between" onClick={Activar}>
                <div className='px-7'>
                    <h1 className=' text-[#E4C59E] text-[32px] inria-serif-bold leading-none'>Inicio</h1>
                    <h1 className=' pb-7 text-[#59618A] text-[20px]'>Bienvenido</h1>
                </div>
                <div className='pb-7 pr-12'>
                    <svg width="110" height="110" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M151 75.3076C151.011 73.706 150.688 72.1197 150.052 70.6497C149.417 69.1797 148.482 67.8581 147.307 66.7691L76.0001 1L4.69256 66.7691C3.51824 67.8581 2.58349 69.1797 1.9478 70.6497C1.31211 72.1197 0.989429 73.706 1.00026 75.3076V139.461C1.00026 142.521 2.21592 145.457 4.37979 147.62C6.54366 149.784 9.47856 151 12.5387 151H139.461C142.521 151 145.457 149.784 147.62 147.62C149.785 145.457 151 142.521 151 139.461V75.3076Z" stroke="#B5B436" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M76 151V104.846" stroke="#B5B436" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

            <div className="bg-[#1F1F1F] rounded-2xl h-[50%] flex items-end place-content-between" onClick={ActivarProblemas}>
                <div className='px-7'>
                    <h1 className=' text-[#E4C59E] text-[32px] inria-serif-bold leading-tight'>Problemas</h1>
                    <h1 className=' pb-7 text-[#59618A] text-[20px] leading-none'>Planteamiento y formulación</h1>
                </div>
                <div className='pb-7 pr-12'>
                    <svg width="110" height="110" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M87.9175 11.6989C86.9824 9.87366 85.5617 8.3419 83.8119 7.2723C82.0622 6.20269 80.0511 5.63672 78.0004 5.63672C75.9495 5.63672 73.9385 6.20269 72.1887 7.2723C70.4389 8.3419 69.0182 9.87366 68.0832 11.6989L6.79747 134.27C5.9427 135.966 5.53574 137.853 5.61523 139.751C5.69473 141.649 6.25804 143.494 7.25168 145.113C8.24531 146.732 9.63629 148.071 11.2925 149C12.9487 149.93 14.8151 150.422 16.7147 150.427H139.286C141.186 150.422 143.052 149.93 144.708 149C146.365 148.071 147.755 146.732 148.749 145.113C149.742 143.494 150.306 141.649 150.385 139.751C150.465 137.853 150.058 135.966 149.203 134.27L87.9175 11.6989Z" stroke="#B5B436" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M78 55.7143V91.9286" stroke="#B5B436" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M78.0001 122.571C76.4616 122.571 75.2144 121.325 75.2144 119.786C75.2144 118.247 76.4616 117 78.0001 117" stroke="#B5B436" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M78 122.571C79.5385 122.571 80.7857 121.325 80.7857 119.786C80.7857 118.247 79.5385 117 78 117" stroke="#B5B436" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>





        <div className="bg-[#1F1F1F] rounded-2xl flex flex-col place-content-end" onClick={ActivarG}>
            <div className='w-full flex place-content-center p-5'>
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.0361 73.9281C78.4468 74.6183 76.7329 74.9743 75.0004 74.9743C73.2677 74.9743 71.5538 74.6183 69.9646 73.9281L8.89317 45.6424C7.90148 45.1423 7.06808 44.3766 6.4858 43.4308C5.90352 42.4849 5.59521 41.396 5.59521 40.2853C5.59521 39.1745 5.90352 38.0856 6.4858 37.1398C7.06808 36.194 7.90148 35.4284 8.89317 34.9281L69.9646 6.42815C71.5538 5.73808 73.2677 5.38199 75.0004 5.38199C76.7329 5.38199 78.4468 5.73808 80.0361 6.42815L141.107 34.7139C142.099 35.2141 142.933 35.9797 143.515 36.9255C144.098 37.8714 144.405 38.9602 144.405 40.071C144.405 41.1817 144.098 42.2706 143.515 43.2165C142.933 44.1624 142.099 44.928 141.107 45.4281L80.0361 73.9281Z" stroke="url(#paint0_linear_241_2)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M144.643 78.7498L79.2857 108.857C77.8899 109.494 76.3735 109.824 74.8393 109.824C73.3051 109.824 71.7887 109.494 70.3929 108.857L5.35718 78.7498" stroke="url(#paint1_linear_241_2)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M144.643 113.571L79.2857 143.679C77.8899 144.315 76.3735 144.645 74.8393 144.645C73.3051 144.645 71.7887 144.315 70.3929 143.679L5.35718 113.571" stroke="url(#paint2_linear_241_2)" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_241_2" x1="75.0001" y1="5.38199" x2="75.0001" y2="74.9743" gradientUnits="userSpaceOnUse">
                <stop stop-color="#13FFD5"/>
                <stop offset="1" stop-color="#FBF958"/>
                </linearGradient>
                <linearGradient id="paint1_linear_241_2" x1="75" y1="78.7498" x2="75" y2="109.824" gradientUnits="userSpaceOnUse">
                <stop stop-color="#13FFD5"/>
                <stop offset="1" stop-color="#FBF958"/>
                </linearGradient>
                <linearGradient id="paint2_linear_241_2" x1="75" y1="113.571" x2="75" y2="144.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#13FFD5"/>
                <stop offset="1" stop-color="#FBF958"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <h1 className='px-7 text-[#E4C59E] text-[32px] inria-serif-bold leading-none'>Bibliografía</h1>
            <h1 className='px-7 pb-7 text-[#59618A] text-[20px]'>Referencias y fuentes del tema</h1>
        </div>





        <div className="bg-[#1F1F1F] rounded-2xl flex flex-col place-content-end group" onClick={ActivarOO}>
            <div className='w-full flex place-content-center p-5 relative'>
                <div className="cajaIntroTitulo1 inria-serif-bold">
                        <h1 className="colorTexto">Analisis</h1>
                        <h1 className="colorTexto">&</h1>
                        <h1 className="colorTexto">Diseño</h1>
                </div>
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.1428 53.5714V16.0714C32.1428 13.2298 33.2717 10.5046 35.2809 8.49529C37.2903 6.48597 40.0155 5.35715 42.8571 5.35715H133.929C136.77 5.35715 139.496 6.48597 141.505 8.49529C143.514 10.5046 144.643 13.2298 144.643 16.0714V101.786C144.643 104.627 143.514 107.353 141.505 109.362C139.496 111.371 136.77 112.5 133.929 112.5H117.857" stroke="url(#paint0_linear_237_16)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.1428 37.5H144.643" stroke="url(#paint1_linear_237_16)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M80.3572 80.3571H16.0715C10.1541 80.3571 5.35718 85.1541 5.35718 91.0714V133.929C5.35718 139.846 10.1541 144.643 16.0715 144.643H80.3572C86.2745 144.643 91.0715 139.846 91.0715 133.929V91.0714C91.0715 85.1541 86.2745 80.3571 80.3572 80.3571Z" stroke="url(#paint2_linear_237_16)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.35718 107.143H91.0715" stroke="url(#paint3_linear_237_16)" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_237_16" x1="88.3928" y1="5.35715" x2="88.3928" y2="112.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6FDFE7"/>
                <stop offset="0.37" stop-color="#63AA9A"/>
                <stop offset="0.61" stop-color="#CDFF3F"/>
                <stop offset="1" stop-color="#4F4F18"/>
                </linearGradient>
                <linearGradient id="paint1_linear_237_16" x1="88.3928" y1="37.5" x2="88.3928" y2="38.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6FDFE7"/>
                <stop offset="0.37" stop-color="#63AA9A"/>
                <stop offset="0.61" stop-color="#CDFF3F"/>
                <stop offset="1" stop-color="#4F4F18"/>
                </linearGradient>
                <linearGradient id="paint2_linear_237_16" x1="48.2143" y1="80.3571" x2="48.2143" y2="144.643" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6FDFE7"/>
                <stop offset="0.37" stop-color="#63AA9A"/>
                <stop offset="0.61" stop-color="#CDFF3F"/>
                <stop offset="1" stop-color="#4F4F18"/>
                </linearGradient>
                <linearGradient id="paint3_linear_237_16" x1="48.2143" y1="107.143" x2="48.2143" y2="108.143" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6FDFE7"/>
                <stop offset="0.37" stop-color="#63AA9A"/>
                <stop offset="0.61" stop-color="#CDFF3F"/>
                <stop offset="1" stop-color="#4F4F18"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <h1 className='px-7 text-[#E4C59E] text-[32px] inria-serif-bold leading-none'>Orientado a objetos</h1>
            <h1 className='px-7 pb-7 text-[#59618A] text-[20px]'>Modelo y diseño</h1>
        </div>
 



        <div className="bg-[#1F1F1F] rounded-2xl flex flex-col place-content-end group" onClick={ActivarEstructurado}>
            <div className='w-full flex place-content-center p-5 relative'>
                <div className="cajaIntroTitulo1 inria-serif-bold">
                        <h1 className="colorTexto">Analisis</h1>
                        <h1 className="colorTexto">&</h1>
                        <h1 className="colorTexto">Diseño</h1>
                </div>
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1782 58.9286V16.0714C40.1782 10.1541 44.9752 5.35713 50.8925 5.35713H99.1068C105.024 5.35713 109.821 10.1541 109.821 16.0714V58.9286C109.821 64.8459 105.024 69.6429 99.1068 69.6429H50.8925C44.9752 69.6429 40.1782 64.8459 40.1782 58.9286Z" stroke="url(#paint0_linear_236_3)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M75 69.6429V112.5" stroke="url(#paint1_linear_236_3)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.4282 112.5V101.786C21.4282 95.8683 26.2252 91.0714 32.1425 91.0714H117.857C123.774 91.0714 128.571 95.8683 128.571 101.786V112.5" stroke="url(#paint2_linear_236_3)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.35693 133.928V123.214C5.35693 117.297 10.1539 112.5 16.0712 112.5H26.7855C32.7028 112.5 37.4998 117.297 37.4998 123.214V133.928C37.4998 139.846 32.7028 144.643 26.7855 144.643H16.0712C10.1539 144.643 5.35693 139.846 5.35693 133.928Z" stroke="url(#paint3_linear_236_3)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M58.9282 133.928V123.214C58.9282 117.297 63.7252 112.5 69.6425 112.5H80.3568C86.2741 112.5 91.0711 117.297 91.0711 123.214V133.928C91.0711 139.846 86.2741 144.643 80.3568 144.643H69.6425C63.7252 144.643 58.9282 139.846 58.9282 133.928Z" stroke="url(#paint4_linear_236_3)" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M112.5 133.928V123.214C112.5 117.297 117.296 112.5 123.214 112.5H133.928C139.846 112.5 144.642 117.297 144.642 123.214V133.928C144.642 139.846 139.846 144.643 133.928 144.643H123.214C117.296 144.643 112.5 139.846 112.5 133.928Z" stroke="url(#paint5_linear_236_3)" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_236_3" x1="74.9997" y1="5.35713" x2="74.9997" y2="69.6429" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C6085"/>
                <stop offset="1" stop-color="#FFFE54"/>
                </linearGradient>
                <linearGradient id="paint1_linear_236_3" x1="75.5" y1="69.6429" x2="75.5" y2="112.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C6085"/>
                <stop offset="1" stop-color="#FFFE54"/>
                </linearGradient>
                <linearGradient id="paint2_linear_236_3" x1="74.9996" y1="91.0714" x2="74.9996" y2="112.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C6085"/>
                <stop offset="1" stop-color="#FFFE54"/>
                </linearGradient>
                <linearGradient id="paint3_linear_236_3" x1="21.4284" y1="112.5" x2="21.4284" y2="144.643" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C6085"/>
                <stop offset="1" stop-color="#FFFE54"/>
                </linearGradient>
                <linearGradient id="paint4_linear_236_3" x1="74.9997" y1="112.5" x2="74.9997" y2="144.643" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C6085"/>
                <stop offset="1" stop-color="#FFFE54"/>
                </linearGradient>
                <linearGradient id="paint5_linear_236_3" x1="128.571" y1="112.5" x2="128.571" y2="144.643" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0C6085"/>
                <stop offset="1" stop-color="#FFFE54"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <h1 className='px-7 text-[#E4C59E] text-[32px] inria-serif-bold leading-none'>Estructurado</h1>
            <h1 className='px-7 pb-7 text-[#59618A] text-[20px]'>Diagramas y Sistemas</h1>
        </div>


        
    </div>
  )
}

export default MenuV2
