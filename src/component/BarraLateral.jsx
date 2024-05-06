
import {useState} from "react";
const BarraLateral=({open})=> {
    const [but1,setbut1]=useState(false);
    const [but2,setbut2]=useState(false);
    const cambiarbut1=()=>{
        if(but1){
            setbut1(false);
        }
        else{
            setbut1(true);
        }
    }
    return (
    <div className={`${open ? "w-24" : "w-64"} bg-bg-barraLateral flex-none h-screen flex flex-col gap-10 pt-11 transition-all duration-500 text-white`} >
        
        <div className="pl-5 flex flex-col gap-10 ml-4">
        <button className="flex items-center gap-4 " onClick={cambiarbut1}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> 
            <path d="M30.8572 15.8629C30.8595 15.5456 30.7955 15.2314 30.6695 14.9402C30.5436 14.649 30.3584 14.3871 30.1257 14.1714L16.0001 1.14285L1.87436 14.1714C1.64174 14.3871 1.45657 14.649 1.33064 14.9402C1.20471 15.2314 1.14079 15.5456 1.14294 15.8629V28.5714C1.14294 29.1776 1.38375 29.7591 1.81241 30.1877C2.24106 30.6162 2.82245 30.8571 3.42864 30.8571H28.5715C29.1776 30.8571 29.7591 30.6162 30.1877 30.1877C30.6165 29.7591 30.8572 29.1776 30.8572 28.5714V15.8629Z" stroke="#B5B436"/>
            <path d="M16 30.8572V21.7143" stroke="#B5B436"/>
            <defs>
            <clipPath id="clip0_13_98">
            <rect width="32" height="32" fill="white"/>
            </clipPath>
            </defs>
            </svg><p className={`${open ? " hidden" : ""} `}>Inicio</p>
        </button>
        <div className={`${but1 && !open ? "" : "hidden"} bg-slate-800 transition-all  duration-200`}>
            
            <a href="#">{but1.toString()}</a>
            <a href="#">link2</a>
            <a href="#">link3</a>
        </div>



        <button className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            
                <path d="M8.57147 12.5714V3.42857C8.57147 2.1662 9.59483 1.14285 10.8572 1.14285H21.1429C22.4053 1.14285 23.4286 2.1662 23.4286 3.42857V12.5714C23.4286 13.8338 22.4053 14.8571 21.1429 14.8571H10.8572C9.59483 14.8571 8.57147 13.8338 8.57147 12.5714Z" stroke="#B5B436"/>
                <path d="M16 14.8571V24" stroke="#B5B436"/>
                <path d="M4.57147 24V21.7143C4.57147 20.4519 5.59483 19.4286 6.85719 19.4286H25.1429C26.4053 19.4286 27.4286 20.4519 27.4286 21.7143V24" stroke="#B5B436"/>
                <path d="M1.14288 28.5714V26.2857C1.14288 25.0233 2.16623 24 3.4286 24H5.71431C6.97667 24 8.00003 25.0233 8.00003 26.2857V28.5714C8.00003 29.8338 6.97667 30.8571 5.71431 30.8571H3.4286C2.16623 30.8571 1.14288 29.8338 1.14288 28.5714Z" stroke="#B5B436"/>
                <path d="M12.5715 28.5714V26.2857C12.5715 25.0233 13.5948 24 14.8572 24H17.1429C18.4053 24 19.4286 25.0233 19.4286 26.2857V28.5714C19.4286 29.8338 18.4053 30.8571 17.1429 30.8571H14.8572C13.5948 30.8571 12.5715 29.8338 12.5715 28.5714Z" stroke="#B5B436"/>
                <path d="M24 28.5714V26.2857C24 25.0233 25.0233 24 26.2857 24H28.5714C29.8338 24 30.8571 25.0233 30.8571 26.2857V28.5714C30.8571 29.8338 29.8338 30.8571 28.5714 30.8571H26.2857C25.0233 30.8571 24 29.8338 24 28.5714Z" stroke="#B5B436"/>
          
                <defs>
                    <clipPath id="clip0_13_105">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                </defs>
            </svg><p className={`${open ? " hidden" : ""}`}>Modelo Estructurado</p>
        </button>


        

        <button className="flex items-center gap-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">          
            <path d="M6.85718 11.4286V3.42857C6.85718 2.82235 7.098 2.24098 7.52664 1.81232C7.9553 1.38367 8.53667 1.14285 9.14289 1.14285H28.5715C29.1776 1.14285 29.7591 1.38367 30.1877 1.81232C30.6163 2.24098 30.8572 2.82235 30.8572 3.42857V21.7143C30.8572 22.3205 30.6163 22.9019 30.1877 23.3305C29.7591 23.7591 29.1776 24 28.5715 24H25.1429" stroke="#B5B436" />
            <path d="M6.85718 8H30.8572" stroke="#B5B436"/>
            <path d="M17.1429 17.1429H3.4286C2.16623 17.1429 1.14288 18.1662 1.14288 19.4286V28.5714C1.14288 29.8338 2.16623 30.8571 3.4286 30.8571H17.1429C18.4052 30.8571 19.4286 29.8338 19.4286 28.5714V19.4286C19.4286 18.1662 18.4052 17.1429 17.1429 17.1429Z" stroke="#B5B436"/>
            <path d="M1.14288 22.8571H19.4286" stroke="#B5B436"/>
            </svg><p className={`${open ? " hidden" : ""}`}>Modelo O.O.</p>
            
        </button>
        </div>



        <div className="px-5">
            <hr className=" border-gray-200"/>
        </div>
        

        <div className="pl-5 flex flex-col gap-10 ml-4">
            
        </div>





    
    </div>
  )
}
export default BarraLateral